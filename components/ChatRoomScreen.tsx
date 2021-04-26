import * as React from 'react';
import {useEffect, useState } from 'react';
import { FlatList, ImageBackground, Button } from 'react-native';
import { Text, View } from './Themed';
import InputBox from './InputBox';
import { onCreateMessage} from'../utils/customQueries'
import API, {graphqlOperation} from '@aws-amplify/api'
//import { useRoute } from '@react-navigation/native';
import ChatMessage from './ChatRoomContent';

export default function ChatRoomScreen({myID, currentChat, setCurrentChat, matches, setMatches}) {
    const [messages, setMessages] = useState(currentChat.chatRoomID.messages.items);
    useEffect(()=>{
        const subscription = API.graphql( {query:onCreateMessage, variables:{chatRoomID:currentChat.chatRoomID.id}}).subscribe({
            next:(data) =>{
                let localMatchesCopy = matches;
                data = data.value.data.onCreateMessage
                data.chatRoom.messages.items = data.chatRoom.messages.items.map(a=>({...a,user:{id:data.user.id, username:data.user.username}}))
                localMatchesCopy[currentChat.index].chatRoomID.messages.items = data.chatRoom.messages.items;
                setMatches(localMatchesCopy);
                setMessages(data.chatRoom.messages.items);
            }
        })
        // return subscription.unsubscribe();
    },[])

    return (
        <ImageBackground style={{width: '100%', height: '100%'}} source={require('../assets/images/BG.png')}>
            <FlatList
                data = {messages}
                renderItem={({item}) => <ChatMessage myID={myID} message={item} />}
            />
            <InputBox chatRoomID={currentChat.chatRoomID.id}myID={myID}/>
            <Button title='Leave' onPress={()=>{setCurrentChat(null)}}/>
        </ImageBackground>
    );
}
