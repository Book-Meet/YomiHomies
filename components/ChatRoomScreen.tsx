import * as React from 'react';
import {useEffect, useState } from 'react';
import { FlatList, ImageBackground, Button } from 'react-native';
import { Text, View } from './Themed';
import InputBox from './InputBox';
import { onCreateMessage} from'../utils/customQueries'
import API, {graphqlOperation} from '@aws-amplify/api'
//import { useRoute } from '@react-navigation/native';
import ChatMessage from './ChatRoomContent';

export default function ChatRoomScreen({myID, currentChat, setCurrentChat, chatRooms, setChatRooms}) {

    return (
        <ImageBackground style={{width: '100%', height: '100%'}} source={require('../assets/images/BG.png')}>
            <FlatList
                extraData={chatRooms}
                data = {currentChat.messages.items}
                renderItem={({item}) => <ChatMessage myID={myID} message={item} currentChat={currentChat}/>}
            />
            <InputBox chatRoomID={currentChat.id} myID={myID}/>
            <Button title='Leave' onPress={()=>{setCurrentChat(null)}}/>
        </ImageBackground>
    );
}
