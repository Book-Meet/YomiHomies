import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';
import { Message } from '../types';
import moment from "moment";

//import { GiftedChat } from 'react-native-gifted-chat';


export type ChatMessageProps = {
    message: Message;
}

export default function ChatMessage(props: ChatMessageProps) {
    const { message } = props;

    const isMyMessage = () => {
        return message.user.id === 'u1';
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
                {!isMyMessage() && <Text style={chatStyles.name}>{message.user.name}</Text>}
                <Text>{message.content}</Text>
                <Text style={chatStyles.time}>{message.createdAt}</Text>
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

// export default function Example() {
//   const [messages, setMessages] = useState([]);
 
//   useEffect(() => {
//     setMessages([
//       {
//         _id: 1,
//         text: 'Hello developer',
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: 'React Native',
//           avatar: 'https://placeimg.com/140/140/any',
//         },
//       },
//     ])
//   }, [])
 
//   const onSend = useCallback((messages = []) => {
//     setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
//   }, [])
 
//   return (
//     <GiftedChat
//       messages={messages}
//       onSend={messages => onSend(messages)}
//       user={{
//         _id: 1,
//       }}
//     />
//   )
// }