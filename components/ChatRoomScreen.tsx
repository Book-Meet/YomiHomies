import * as React from 'react';
import {useEffect } from 'react';
import { FlatList, ImageBackground, Button } from 'react-native';
import { Text, View } from './Themed';
import InputBox from './InputBox';
import { onCreateMessage} from'../src/graphql/subscriptions'
import API, {graphqlOperation} from '@aws-amplify/api'
//import { useRoute } from '@react-navigation/native';
import ChatMessage from './ChatRoomContent';

export default function ChatRoomScreen({myID, currentChat, setCurrentChat}) {
    //const route = useRoute();
    let currentChatCopy = currentChat;
    console.log('current chat ', currentChat)
    useEffect(()=>{
        const subscription = API.graphql( {query:onCreateMessage, variables:{chatRoomID:currentChat.chatRoomID.id}}).subscribe({
            next:(data) =>{
                console.log('data value data: ', data.value.data);
            }
        })
    },[])

    return (
        <ImageBackground style={{width: '100%', height: '100%'}} source={require('../assets/images/BG.png')}>
            <FlatList
                data = {currentChat.chatRoomID.messages.items}
                renderItem={({item}) => <ChatMessage myID={myID} message={item} />}
            />
            <InputBox chatRoomID={currentChat.chatRoomID.id}myID={myID}/>
            <Button title='Leave' onPress={()=>{setCurrentChat(null)}}/>
        </ImageBackground>
    );
}
