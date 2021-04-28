import * as React from 'react';
import {useEffect, useContext, useState} from 'react';
import { StyleSheet, FlatList, SafeAreaView, Image, Pressable } from 'react-native';
import { Text, View } from '../components/Themed'
import  ChatListItem  from '../components/ChatListItem/index';
import {listMatchs} from '../src/graphql/queries';
import API, {graphqlOperation} from '@aws-amplify/api'
import UserContext from '../utils/userContext';
import { createChatRoom, createChatRoomUser} from'../src/graphql/mutations'
import {listChatRooms,onCreateMessage } from '../utils/customQueries'
import ChatRoomScreen from '../components/ChatRoomScreen'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default function TabHomiesScreen() {
  const [newChatFlag, setNewChatFlag] = useState(false);
  const {state, dispatch} = useContext(UserContext);
  const [chatRooms, setChatRooms] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(state.user.id === '') return
    (async function() {
      let filter = { and: [{matcheeID: {eq: state.user.id }}, {status: {eq: "accepted"}}]}
      let myMatchers = await API.graphql({query:listMatchs, variables: {filter: filter}});
      myMatchers = myMatchers.data.listMatchs.items;
      let myMatchees = state.user.match.items.filter(a => a.status === 'accepted').map(a => a.matcheeID);
      let matches = myMatchers.filter(a => myMatchees.includes(a.matcherID)).map(a=>a.matcherProfile);
      let chatRoomsFetch = await API.graphql(graphqlOperation(listChatRooms, {userID:state.user.id})); // Fetching all chat rooms? should get just mine
      chatRoomsFetch = chatRoomsFetch.data.listChatRooms.items;
      chatRoomsFetch = chatRoomsFetch.filter(a => {
        if (a.ChatRoomUsers.items[0].userID === state.user.id || a.ChatRoomUsers.items[1].userID === state.user.id) return true;
        return false;
      })
      let chatRoomIDs = chatRoomsFetch.map(a=>{
        if(a.ChatRoomUsers.items[0] && a.ChatRoomUsers.items[0].userID === state.user.id){
          return a.ChatRoomUsers.items[1].userID;
        } else{
          return a.ChatRoomUsers.items[0].userID;
        }
      })
      let isNewChat = false;
      for(let match of matches){
        if(!chatRoomIDs.includes(match.id)){ //create chat if one doesn't exist
          isNewChat = true;
          let newUUID = uuidv4();
          let newChatRoom = await API.graphql(graphqlOperation(createChatRoom, {input:{id:newUUID}}));
          let newChatRoomUser = await API.graphql(graphqlOperation(createChatRoomUser, {input:{chatRoomID:newChatRoom.data.createChatRoom.id, userID: match.id}}))
          let myChatRoomUser = await API.graphql(graphqlOperation(createChatRoomUser, {input:{chatRoomID:newChatRoom.data.createChatRoom.id, userID: state.user.id}}))
        }
      }
      if(isNewChat) setNewChatFlag(true);
      chatRoomsFetch = chatRoomsFetch.filter(room=>{
        return room.ChatRoomUsers.items[0].userID === state.user.id || room.ChatRoomUsers.items[1].userID === state.user.id
      })
      if(!isNewChat){
        chatRoomsFetch = chatRoomsFetch.sort((a,b)=>{
          return a.messages.items[a.messages.items.length - 1].createdAt < b.messages.items[b.messages.items.length - 1].createdAt
        })
        setChatRooms(chatRoomsFetch.map((v,i)=>({...v,index:i})))
      }
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
        if(!room)return;
        if(room.messages.items.length > 0 && room.messages.items[room.messages.items.length -1].id === data.id) return
        room.messages.items.push(data)
        moveToTop(chatRoomsCopy, room.index)
        chatRoomsCopy = chatRoomsCopy.map((v,i)=>({...v,index:i}))
        setChatRooms(chatRoomsCopy)
      }
    })
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
