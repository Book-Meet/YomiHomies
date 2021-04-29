import * as React from 'react';
import {useRef} from 'react';
import { FlatList, ImageBackground, Button } from 'react-native';
import InputBox from './InputBox';
import ChatMessage from './ChatRoomContent';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ChatRoomScreen({myID, currentChat, setCurrentChat, chatRooms}) {
    const list=useRef(null)

    function handleLeave(){
        setCurrentChat(null);
        async function storeData(){
            let lastMessage = currentChat.messages.items[currentChat.messages.items.length - 1].id || null
            if(!lastMessage) return;
            try{
               await AsyncStorage.setItem(`chatRoom:${currentChat.id}`, lastMessage)
            }catch(err){
                console.log(err);
            }
        }
        storeData()
    }

    return (
        <ImageBackground style={{width: '100%', height: '100%'}} source={require('../assets/images/BG.png')}>
            <FlatList
                ref={list}
                extraData={chatRooms}
                data = {currentChat.messages.items}
                renderItem={({item}) => <ChatMessage myID={myID} message={item} currentChat={currentChat}/>}
                onContentSizeChange={()=> list.current.scrollToEnd()} 
            />
            <InputBox currentChat={currentChat} myID={myID} />
            <Button title='Leave' onPress={handleLeave}/>
        </ImageBackground>
    );
}
