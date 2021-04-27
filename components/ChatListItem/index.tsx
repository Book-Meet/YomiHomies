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
    let username;
    chatRoom.ChatRoomUsers.items[0].userID === state.user.id ? username = chatRoom.ChatRoomUsers.items[1].user.username : username = chatRoom.ChatRoomUsers.items[0].user.username
    function handlePress(e){
        setCurrentChat(chatRoom.index)
    }
    return (
        <View>
            <TouchableWithoutFeedback onPress={handlePress}>
                <View style={styles.container}>
                    <View style={styles.lefContainer}>
                        {/* <Image source={{ uri: user.imageUri }} style={styles.avatar} /> */}
                        <View style={styles.midContainer}>
                            <Text style={styles.username}>{username}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
};

export default ChatListItem;