import React from 'react';
import {useState, useContext} from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom } from '../../types';
import styles from './style';
import ChatRoomScreen from '../ChatRoomScreen';
import UserContext from '../../utils/userContext';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = ({chatRoom, setCurrentChat}) =>{
    const {state, dispatch} = useContext(UserContext);
    let user;
    let visibleName;
    chatRoom.ChatRoomUsers.items[0].userID === state.user.id ? user = chatRoom.ChatRoomUsers.items[1].user : user = chatRoom.ChatRoomUsers.items[0].user
    user.nickname ? visibleName = user.nickname : visibleName = user.username
    let book = user.books.items
    function handlePress(e){
        setCurrentChat(chatRoom.index)
    }
    console.log(chatRoom)
    // console.log(book);
    return (
        <View>
            <TouchableWithoutFeedback onPress={handlePress}>
                <View style={styles.container}>
                    <View style={styles.lefContainer}>
                        <Image source={{ uri: book[0].imgURL }} style={styles.avatar} />
                        <View style={styles.midContainer}>
                            <Text style={styles.username}>{visibleName}</Text>
                            {chatRoom.messages.items.length > 0 && <Text>{chatRoom.messages.items[chatRoom.messages.items.length - 1].content}</Text>}
                            </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
};

export default ChatListItem;