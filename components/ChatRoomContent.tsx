import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';
import { Message } from '../types';
import moment from "moment";

export type ChatMessageProps = {
    message: Message;
}

export default function ChatMessage({ message, myID }: ChatMessageProps) {
    let username = message.user.nickname ?? message.user.username;
    const isMyMessage = () => {
        return message.user.id === myID;
    }
    return (
        <View style={chatStyles.container}>
            <View style={[
                chatStyles.messageBox, {
                    backgroundColor: isMyMessage() ? '#b2d4f0' : 'white',
                    marginLeft: isMyMessage() ? 50 : 0,
                    marginRight: isMyMessage() ? 0 : 50,
                }
            ]}>
                {!isMyMessage() && <Text style={chatStyles.name}>{username}</Text>}
                <Text>{message.content}</Text>
                <Text style={chatStyles.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
    );
}

const chatStyles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    messageBox: {
        borderRadius: 5,
        padding: 10,
    },
    name: {
        color: '#0C6157',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    time: {
        alignSelf: 'flex-end',
        color: 'grey'
    }
});
