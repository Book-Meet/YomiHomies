import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from './Themed';
import { MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto, MaterialIcons } from '@expo/vector-icons';

export default function InputBox() {

    const [message, setMessage] = useState('');

    const onMicrophonePress = () => {
        console.log('Microphone');
    }

    const onSendPress = () => {
        console.log(`Sending: ${message}`);

        // Need to send the message to back-end

        setMessage('');
    }

    const onPress = () => {
        if (!message) {
            onMicrophonePress();
        } else {
            onSendPress();
        }
    }

    return (
        <View style={inputStyles.container}>
            <View style={inputStyles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey" />
                <TextInput
                    placeholder={"Type a message"}
                    style={inputStyles.textInput}
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo name="attachment" size={24} color="grey" style={inputStyles.icon} />
                {!message && <Fontisto name="camera" size={24} color="grey" style={inputStyles.icon} /> }
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={inputStyles.buttonContainer} >
                    {!message
                        ? <MaterialCommunityIcons name="microphone" size={28} color="white" />
                        : <MaterialIcons name="send" size={28} color="white" />
                    }
                </View>
            </TouchableOpacity>
        </View>
    );
}

const inputStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 10,
        backgroundColor: 'lightgrey'
    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 25,
        marginRight: 10,
        flex: 1,
        alignItems: 'flex-end',
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10,
    },
    icon: {
        marginHorizontal: 5,
    },
    buttonContainer: {
        backgroundColor: '#0C6157',
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
});