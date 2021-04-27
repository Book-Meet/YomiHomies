import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';
import { Message } from '../types';
import moment from "moment";

export type ChatMessageProps = {
    message: Message;
}

export default function ChatMessage({ message, myID }: ChatMessageProps) {
    const isMyMessage = () => {
        return message.user.id === myID;
    }
    return (
        <View style={chatStyles.container}>
            <View style={[
                chatStyles.messageBox, {
                    backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
                    marginLeft: isMyMessage() ? 50 : 0,
                    marginRight: isMyMessage() ? 0 : 50,
                }
            ]}>
                {!isMyMessage() && <Text style={chatStyles.name}>{message.user.username}</Text>}
                <Text>{message.content}</Text>
                <Text style={chatStyles.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
    );
}

const chatStyles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'lightgrey'
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
