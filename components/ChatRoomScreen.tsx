import * as React from 'react';
import { FlatList, ImageBackground } from 'react-native';
import { Text, View } from './Themed';
import InputBox from './InputBox';

//import { useRoute } from '@react-navigation/native';

import chatRoomData from '../data/Chats';
import ChatMessage from './ChatRoomContent';

export default function ChatRoomScreen() {

    //const route = useRoute();
    //console.log(route.params);

    return (
        <ImageBackground style={{width: '100%', height: '100%'}} source={require('../assets/images/BG.png')}>
            <FlatList
                data = {chatRoomData.messages}
                renderItem={({item}) => <ChatMessage message={item} />}
            />
            <InputBox />
        </ImageBackground>
    );
}
