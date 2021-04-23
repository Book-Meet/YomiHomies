import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { ChatRoom } from '../../types';
import styles from './style';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = ({match}) =>
{
    // const user = chatRoom.users[1];
    
    const onClick = () =>
    {
        console.log(match.hasOwnProperty('chatRoomID'));
    }
    return (
        <TouchableWithoutFeedback onPress={onClick}>
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
    )
};

export default ChatListItem;