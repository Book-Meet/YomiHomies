import React, { useContext, useRef } from 'react';
import { StyleSheet, TextInput, Button, SafeAreaView, ScrollView, Pressable } from 'react-native';
import { Text, View } from './Themed';
import UserContext from '../utils/userContext'
import { API } from 'aws-amplify'; 
import { updateProfile, createBook, deleteBook,} from '../src/graphql/mutations';
import { ActionType, Books } from '../types';

export default function EditProfile({ setViewMode, styles }) {
    const { state, dispatch } = useContext(UserContext);
    const nicknameVal = useRef(null);
    const genderVal = useRef(null);
    const aboutMeVal = useRef(null);
    const bookVal = useRef(null);
    const authorVal = useRef(null);
    

    async function handleSave() {
        if (nicknameVal.current.value === "" || genderVal.current.value === ""
        || aboutMeVal.current.value === "") {
            alert("No blank fields allowed!");
            return;
        }
        const newVals = {
            id: state.user.id,
            _version: state.user._version,
            nickname: nicknameVal.current.value,
            gender: genderVal.current.value,
            about_me: aboutMeVal.current.value
        }
        let updated:any = await API.graphql({query:updateProfile, variables: {input:newVals, id:state.user.id}})
        dispatch({type: ActionType.SetData, payload: updated.data.updateProfile});
        setViewMode("view");
        console.log(state.user);
    }

    async function handleAddBook() {
        if (authorVal.current.value === "" || bookVal.current.value === "") {
            alert("Book and author fields must have a value");
            return;
        }
        const newBook:Books = {
            author: authorVal.current.value,
            title: bookVal.current.value,
            profileID: state.user.id
        }
        let addedBook = await API.graphql({query:createBook, variables:{input:newBook}});
        newBook.id = addedBook.data.createBook.id;
        let updatedUser = {... state.user}
        updatedUser.books.items.push(newBook)
        dispatch({type: ActionType.SetData, payload: updatedUser});
        authorVal.current.value = "";
        bookVal.current.value = "";
    }

    async function handleDeleteBook(id) {
        alert(id);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text>Edit Profile</Text>
                </View>
                <Text>Nickname:</Text>
                <TextInput
                    ref={nicknameVal}
                    style={styles.input}
                    defaultValue={state.user.nickname}
                />

                <Text>Gender:</Text>
                <TextInput
                    ref={genderVal}
                    style={styles.input}
                    defaultValue={state.user.gender}
                />

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
                        ref={aboutMeVal}
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

                <Text>Top Books (up to 5):</Text>
                <View style={styles.content}>
                    <View style={styles.listBooks}>
                    { 
                        state.user.books !== undefined ? state.user.books.items.map(book => {
                            return (<>
                                <Pressable
                                    key={book.id}
                                    onPress={() => handleDeleteBook(book)}
                                    style={[styles.xButton, styles.listItem]}>
                                    <Text>X</Text>
                                </Pressable>
                                <Text key={book.id} style={styles.listItem}>
                                    {book.title} - {book.author}
                                </Text>
                            </>
                            )
                        })
                    : null
                    }
                    </View>
                    {
                        state.user.books === undefined || state.user.books.items.length < 5 ?
                        (<>
                            <TextInput
                                ref={bookVal}
                                style={styles.input}
                                placeholder='book title...'
                            />
                            <TextInput
                                ref={authorVal}
                                style={styles.input}
                                placeholder='author name...'
                            />
                            <Pressable
                                onPress={() => handleAddBook()}
                                style={[styles.button, styles.buttonOpen]}
                            >
                                <Text>Add Book</Text>
                            </Pressable>
                        </>)
                        : null
                    }
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
    xButton: {
        backgroundColor: "red",
        flex: 1
    },
    listBooks: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap"
    },
    listItem: {
        flex: 6
    }
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