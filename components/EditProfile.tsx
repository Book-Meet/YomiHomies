import React, { useContext } from 'react';
import { StyleSheet, TextInput, Button, SafeAreaView, ScrollView, Pressable } from 'react-native';
import { Text, View } from './Themed';
import UserContext from '../utils/userContext'

export default function EditProfile({ setViewMode, styles }) {
    const { state, dispatch } = useContext(UserContext)

    async function handleSave() {
        alert("save clicked");
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text>Edit Profile</Text>
                </View>
                <Text>Nickname:</Text>
                <TextInput
                    style={styles.input}
                    defaultValue={state.user.nickname}
                />

                <Text>Gender:</Text>
                <TextInput
                    style={styles.input}
                    defaultValue={state.user.gender}
                />

                <Text>Top Books (up to 3):</Text>
                <View style={styles.content}>
                    <View style={styles.list}>
                    { 
                        state.user.books !== undefined ? state.user.books.items.map(book => {
                            return (
                                <Text key={book.id}>{book.title} - {book.author}</Text>
                            )
                        })
                    : null
                    }
                    </View>
                    {
                        state.user.books === undefined || state.user.books.items.length < 3 ?
                        (<TextInput
                            style={styles.input}
                            placeholder='new books...'
                        />)
                        : null
                    }
                </View>
                {/* <Text>Top Genres:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='new genres...'
                        onChangeText={(val)=> alert(val)}
                    />

                <Text>Top Authors:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='new Authors...'
                        onChangeText={(val)=> alert(val)}
                    /> */}

                <Text>About me:</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        defaultValue={state.user.about_me}
                    />
                
                <View style={styles.buttons}>
                    <Pressable
                        onPress={() => setViewMode("view")}
                        style={[styles.button, styles.buttonOpen]}
                    >
                        <Text>Cancel</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => handleSave()}
                        style={[styles.button, styles.buttonOpen]}
                    >
                        <Text>Save</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    buttons: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap"
    },
    // content: {
    //     padding: 40,
    // },
    // list: {
    //     marginTop: 0,
    // },
    // header: {
    //     height: 80,
    //     marginTop: 35,
    // },
    // input: {
    //     borderWidth: 1,
    //     borderColor: '#777',
    //     padding: 8,
    //     margin: 10,
    //     width: 200,
    // }
});