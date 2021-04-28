import React from 'react';
import {useEffect, useContext, useState} from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom } from '../../types';
import styles from './style';
import ChatRoomScreen from '../ChatRoomScreen';
import UserContext from '../../utils/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = ({chatRoom, setCurrentChat}) =>{
    const {state, dispatch} = useContext(UserContext);
    const [numUnread, setNumUndread] = useState(0)
    
    let user;
    let visibleName;
    chatRoom.ChatRoomUsers.items[0].userID === state.user.id ? user = chatRoom.ChatRoomUsers.items[1].user : user = chatRoom.ChatRoomUsers.items[0].user
    user.nickname ? visibleName = user.nickname : visibleName = user.username
    let messages = chatRoom.messages.items.filter(a=>a.user.id!=state.user.id);
    let book = user.books.items
    function handlePress(e){
        setCurrentChat(chatRoom)
    }

    useEffect(() => {
        async function getData(){
            try{
                let value = await AsyncStorage.getItem(`chatRoom:${chatRoom.id}`)
                if(value === null) return
                let unread = chatRoom.messages.items.length - chatRoom.messages.items.findIndex(a=>a.id === value) - 1;
                setNumUndread(unread)
            }catch(err){
                console.log(err)
            }
        }
        getData()
    }, [chatRoom])

    return (
        <View>
            <TouchableWithoutFeedback onPress={handlePress}>
                <View style={styles.container}>
                    <View style={styles.lefContainer}>
                        <Image source={{ uri: book[0].imgURL }} style={{width:60,height:60,marginRight:10}} resizeMode="contain"/>
                        <View style={styles.midContainer}>
                            <Text style={styles.username}>{visibleName}</Text>
                            {messages.length > 0 ? <Text>{messages[messages.length - 1].content}</Text> : <Text>No Message from partner</Text>}
                            </View>
                            <Text>{numUnread}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
};

export default ChatListItem;