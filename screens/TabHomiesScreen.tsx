import * as React from 'react';
import {useEffect, useContext, useState} from 'react';
import { StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import { Text, View } from '../components/Themed'
import  ChatListItem  from '../components/ChatListItem/index';
import chatRooms from '../data/ChatRooms';
import {listMatchs} from '../src/graphql/queries';
import API, {graphqlOperation} from '@aws-amplify/api'
import UserContext from '../utils/userContext';
import { onCreateMessage} from'../src/graphql/subscriptions'
import { createMessage} from'../src/graphql/mutations'
import {listChatRooms} from '../utils/customQueries'

export default function TabHomiesScreen() 
{
  
  const {state, dispatch} = useContext(UserContext);
  const [matches, setMatches] = useState([]);
  
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
      let chatRoomIDs = chatRooms.map(a=>a.ChatRoomUsers.items[0].userID)

      for(let match of matches){
        if(chatRoomIDs.includes(match.id)){
          match.chatRoomID = chatRooms[chatRoomIDs.indexOf(match.id)]
        }
      }
      setMatches(matches)
    })()
  }, [state]);

  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={matches}
        renderItem={({ item }) => <ChatListItem match={item}/>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
