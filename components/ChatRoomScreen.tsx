import * as React from 'react';
import { FlatList, ImageBackground, Button } from 'react-native';
import { Text, View } from './Themed';
import InputBox from './InputBox';

//import { useRoute } from '@react-navigation/native';

import chatRoomData from '../data/Chats';
import ChatMessage from './ChatRoomContent';

export default function ChatRoomScreen({myID, currentChat, setCurrentChat}) {

    //const route = useRoute();
    //console.log(route.params);
    const chatRoomData = currentChat.chatRoomID;
    return (
        <ImageBackground style={{width: '100%', height: '100%'}} source={require('../assets/images/BG.png')}>
            <FlatList
                data = {chatRoomData.messages.items}
                renderItem={({item}) => <ChatMessage myID={myID} message={item} />}
            />
            <InputBox chatRoomID={chatRoomData.id}myID={myID}/>
            <Button title='Leave' onPress={()=>{setCurrentChat(null)}}/>
        </ImageBackground>
    );
}
