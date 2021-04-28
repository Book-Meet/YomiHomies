import * as React from 'react';
import {useRef} from 'react';
import { FlatList, ImageBackground, Button } from 'react-native';
import InputBox from './InputBox';
import ChatMessage from './ChatRoomContent';

export default function ChatRoomScreen({myID, currentChat, setCurrentChat, chatRooms, setChatRooms}) {
    const list=useRef(null)
    console.log(currentChat)
    return (
        <ImageBackground style={{width: '100%', height: '100%'}} source={require('../assets/images/BG.png')}>
            <FlatList
                ref={list}
                extraData={chatRooms}
                data = {currentChat.messages.items}
                renderItem={({item}) => <ChatMessage myID={myID} message={item} currentChat={currentChat}/>}
                onContentSizeChange={()=> list.current.scrollToEnd()} 
            />
            <InputBox chatRoomID={currentChat.id} myID={myID}/>
            <Button title='Leave' onPress={()=>{setCurrentChat(null)}}/>
        </ImageBackground>
    );
}
