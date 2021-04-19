import * as React from 'react';
import {useState, useContext} from 'react';
import { StyleSheet, TextInput, Button, FlatList } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { Text, View } from './Themed';

export default function EditProfile() {
    const [nickName, setNickName] = useState('Ari');
    const [gender, setGender] = useState('female');
    const [books, setBooks] = useState([
        { book: 'The Devil Wears Prada', key: '1'},
        { book: 'Factfullness', key: '2'},
        { book: 'Lord of the Rings', key: '3'},
    ]);
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Edit Profile</Text>
            </View>
            <Text>Nickname:</Text>
            <TextInput
                style={styles.input}
                placeholder={nickName}
                onChangeText={(val) => setNickName(val)}
            />

            <Text>Gender:</Text>
            <TextInput
                style={styles.input}
                placeholder={gender}
                onChangeText={(val) => setGender(val)}
            />

            <Text>Top Books:</Text>
            <View style={styles.content}>
                <View style={styles.list}>
                    <FlatList
                        data={books}
                        renderItem={({item}) => (
                            <Text>{item.book}</Text>
                        )}
                    />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder='new books...'
                    onChangeText={changeHandler}
                />
            </View>
            <Text>Top Genres:</Text>

            <Text>Top Authors:</Text>

            <Text>About me:</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        padding: 40,
    },
    list: {
        marginTop: 20,
    },
    header: {
        height: 80,
        marginTop: 35,
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    }
});