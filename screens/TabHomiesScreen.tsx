import * as React from 'react';
import {useEffect, useContext, useState} from 'react';
import { StyleSheet, FlatList, SafeAreaView, Image, Pressable } from 'react-native';
import { Text, View } from '../components/Themed'
import  ChatListItem  from '../components/ChatListItem/index';
import chatRooms from '../data/ChatRooms';
import {listMatchs} from '../src/graphql/queries';
import API, {graphqlOperation} from '@aws-amplify/api'
import UserContext from '../utils/userContext';
import { createChatRoom, createChatRoomUser} from'../src/graphql/mutations'
import {listChatRooms} from '../utils/customQueries'
import ChatRoomScreen from '../components/ChatRoomScreen'
import { v4 as uuidv4 } from 'uuid';

export default function TabHomiesScreen() {
  const [newChatFlag, setNewChatFlag] = useState(false);
  const {state, dispatch} = useContext(UserContext);
  const [matches, setMatches] = useState([]);
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

      let chatRooms = await API.graphql(graphqlOperation(listChatRooms, {userID:state.user.id}));
      chatRooms = chatRooms.data.listChatRooms.items;
      let chatRoomIDs = chatRooms.map(a=>{
        if(a.ChatRoomUsers.items[0] && a.ChatRoomUsers.items[0].userID === state.user.id){
          return a.ChatRoomUsers.items[1].userID;
        } else{
          return a.ChatRoomUsers.items[0].userID;
        }
      })
      let isNewChat = false;
      for(let match of matches){
        if(chatRoomIDs.includes(match.id)){ //if we already have a chatroom togther
          match.chatRoomID = chatRooms[chatRoomIDs.indexOf(match.id)]
        }else { // create new chat room
          isNewChat = true;
          let newUUID = uuidv4();
          let newChatRoom = await API.graphql(graphqlOperation(createChatRoom, {input:{id:newUUID}}));
          let newChatRoomUser = await API.graphql(graphqlOperation(createChatRoomUser, {input:{chatRoomID:newChatRoom.data.createChatRoom.id, userID: match.id}}))
          let myChatRoomUser = await API.graphql(graphqlOperation(createChatRoomUser, {input:{chatRoomID:newChatRoom.data.createChatRoom.id, userID: state.user.id}}))
        }
      }
      if(isNewChat) setNewChatFlag(true);
      setMatches(matches)
      setLoading(false)
    })()
  }, [state, newChatFlag]);


    return (
      <View>
        {!currentChat && !loading && <View>
          <FlatList style={{width: '100%'}}
            data={matches}
            renderItem={({item})=>(<ChatListItem match={item} setCurrentChat={setCurrentChat}/>)}
            keyExtractor={(item)=>item.id}
            />
        </View>}
        {currentChat && <ChatRoomScreen myID={state.user.id} currentChat={currentChat} setCurrentChat={setCurrentChat}/>}
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
