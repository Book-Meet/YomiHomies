import React, { useState, useCallback, useEffect } from 'react';
import { Text, View } from './Themed';
import { Message } from '../types';
import moment from "moment";

//import { GiftedChat } from 'react-native-gifted-chat';


export type ChatMessageProps = {
    message: Message;
}


export default function ChatMessage(props: ChatMessageProps) {
    const { message } = props;
    return (
        <View>
            <Text>{message.user.name}</Text>
            <Text>{message.content}</Text>
            <Text>{message.createdAt}</Text>
        </View>
    )
}

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