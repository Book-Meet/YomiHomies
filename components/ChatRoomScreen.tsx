import React from 'react';
import { FlatList } from 'react-native';
// import { Text, View } from './Themed';

//import { useRoute } from '@react-navigation/native';

import chatRoomData from './Chats';
import ChatMessage from './ChatRoomContent';

export default function ChatRoomScreen() {

    //const route = useRoute();
    //console.log(route.params);

    return (
        <FlatList
            data = {chatRoomData.messages}
            renderItem={({item}) => <ChatMessage message={item} />}
        />
    );
}
