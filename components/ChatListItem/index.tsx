import React from 'react';
import {useState} from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom } from '../../types';
import styles from './style';
import ChatRoomScreen from '../ChatRoomScreen';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = ({match, setCurrentChat}) =>
    {

    function handlePress(e){
        setCurrentChat(match)
    }
    return (
        <View>
            <TouchableWithoutFeedback onPress={handlePress}>
                <View style={styles.container}>
                    <View style={styles.lefContainer}>
                        {/* <Image source={{ uri: user.imageUri }} style={styles.avatar} /> */}
                        <View style={styles.midContainer}>
                            <Text style={styles.username}>{match.username}</Text>
                            {match.hasOwnProperty('chatRoomID') && <Text>Already has a chatroom</Text>}
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
};

export default ChatListItem;