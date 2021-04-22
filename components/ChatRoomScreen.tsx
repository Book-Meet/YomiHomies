import React from 'react';
import { FlatList, ImageBackground } from 'react-native';
// import BG from '../assets/images/BG.png';
// import { Text, View } from './Themed';

//import { useRoute } from '@react-navigation/native';

import chatRoomData from './Chats';
import ChatMessage from './ChatRoomContent';

export default function ChatRoomScreen() {

    //const route = useRoute();
    //console.log(route.params);

    return (
        // <ImageBackground style={{width: '100%', height: '100%'}} source={BG}>
            <FlatList
                data = {chatRoomData.messages}
                renderItem={({item}) => <ChatMessage message={item} />}
            />
        // </ImageBackground>
    );
}
