import * as React from 'react';
import {useEffect, useContext, useState} from 'react';
import { StyleSheet, FlatList, SafeAreaView, Image, Pressable } from 'react-native';
import { Text, View } from '../components/Themed'
import  ChatListItem  from '../components/ChatListItem/index';
import {listMatchs} from '../src/graphql/queries';
import API, {graphqlOperation} from '@aws-amplify/api'
import UserContext from '../utils/userContext';
import { createChatRoom, createChatRoomUser, deleteChatRoomUser} from'../src/graphql/mutations'
import {onCreateMessage, listChatRoomUsers } from '../utils/customQueries'
import ChatRoomScreen from '../components/ChatRoomScreen'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Notifier, Easing} from 'react-native-notifier'

export default function TabHomiesScreen() {
  const [newChatFlag, setNewChatFlag] = useState(false);
  const {state, dispatch} = useContext(UserContext);
  const [chatRooms, setChatRooms] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(state.user.id === '') return;
    (async function() {
      let myMatches = state.user.match.items
      let filterByAcceptedAndMyID = { and: [{matcheeID: {eq: state.user.id }}, {status: {eq: "accepted"}}]}; 
      let usersWhoAcceptedMe = (await API.graphql({query:listMatchs, variables: {filter: filterByAcceptedAndMyID}})).data.listMatchs.items;
      let IDsOfMyAccepted = myMatches.filter(a => a.status === 'accepted').map(a => a.matcheeID);
      let matches = usersWhoAcceptedMe.filter(a => IDsOfMyAccepted.includes(a.matcherID))
      let myChatRooms = (await API.graphql({query:listChatRoomUsers, variables:{filter:{userID:{eq:state.user.id}}}})).data.listChatRoomUsers.items.map(a=>a.chatRoom);
      if(myChatRooms.includes(null)) deleteNullChatRoomUsers()
      let IDOfOtherChatRoomUser = myChatRooms.map(a => a.ChatRoomUsers.items[0].user.id === state.user.id ? a.ChatRoomUsers.items[1].user.id : a.ChatRoomUsers.items[0].user.id)
      let isNewChat = false;
      for(let match of matches){
        if(!IDOfOtherChatRoomUser.includes(match.matcherID)){ //create chat if one doesn't exist
          console.log('new Chat Room being made')
          isNewChat = true;
          let newUUID = uuidv4();
          let newChatRoom = await API.graphql(graphqlOperation(createChatRoom, {input:{id:newUUID}}));
          let newChatRoomUser = await API.graphql(graphqlOperation(createChatRoomUser, {input:{chatRoomID:newChatRoom.data.createChatRoom.id, userID: match.matcherID}}))
          let myChatRoomUser = await API.graphql(graphqlOperation(createChatRoomUser, {input:{chatRoomID:newChatRoom.data.createChatRoom.id, userID: state.user.id}}))
        }
      }
      if(isNewChat){
        setNewChatFlag(true);
        return
      } 
      myChatRooms = myChatRooms.sort((a,b)=>{
        if(a.messages.items.length === 0) return + 1;
        if(b.messages.items.length === 0) return - 1;
        return b.messages.items[b.messages.items.length - 1].createdAt > a.messages.items[a.messages.items.length - 1].createdAt;
      })
      setChatRooms(myChatRooms.map((v,i)=>({...v,index:i})))
      setLoading(false)
    })()
  }, [state.user, newChatFlag]);

  
  useEffect(()=>{
    if(chatRooms.length === 0) return;
    const subscription = API.graphql( {query:onCreateMessage}).subscribe({
      next:(data) =>{
        let chatRoomsCopy = [... chatRooms];
        data = data.value.data.onCreateMessage
        let room = chatRoomsCopy.find(a=>a.id === data.chatRoomID)
        if(!room) return
        if(room.messages.items.length > 0 && room.messages.items[room.messages.items.length -1].id === data.id) return
        room.messages.items.push(data)
        moveToTop(chatRoomsCopy, room.index)
        chatRoomsCopy = chatRoomsCopy.map((v,i)=>({...v,index:i}))
        setChatRooms(chatRoomsCopy)
        if(data.user.id === state.user.id) return
        Notifier.showNotification({
          title:data.user.nickname,
          description:data.content,
          duration: 4000,
          showAnimationDuration: 800,
          showEasing: Easing.bounce,
          queueMode: "standby",
          hideOnPress: true,
        })
      },
      error:(err)=>{
        console.log(err)
      }
    })
    return () => subscription.unsubscribe();
  },[chatRooms])

  function moveToTop(arr, fromIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(0, 0, element);
  }

  useEffect(()=>{
    if(currentChat === null) return
    setCurrentChat(chatRooms[chatRooms.findIndex(a=>a.id===currentChat.id)])
  }, [chatRooms])

  async function deleteNullChatRoomUsers(){
    let allChatRooms = (await API.graphql({query:listChatRoomUsers, variables:{filter:{userID:{eq:state.user.id}}}})).data.listChatRoomUsers.items.filter(a=>a.chatRoom===null)
    allChatRooms.forEach(async chatRoom=>{
      await API.graphql({query:deleteChatRoomUser, variables:{input:{id:chatRoom.id}}})
    }) 
  }
    return (
      <View style={styles.container}>
        {currentChat === null && !loading && <View>
          <FlatList style={{width: '100%'}}
            data={chatRooms}
            extraData={chatRooms.length}
            renderItem={({item})=>(<ChatListItem chatRoom={item} setCurrentChat={setCurrentChat}/>)}
            keyExtractor={(item)=>item.id}
            />
        </View>}
        {currentChat !== null && <ChatRoomScreen myID={state.user.id} currentChat={currentChat} setCurrentChat={setCurrentChat} chatRooms={chatRooms} setChatRooms={setChatRooms}/>}
      </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
