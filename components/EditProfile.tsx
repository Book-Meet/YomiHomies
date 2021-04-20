import React, { useContext, useRef, useState } from 'react';
import { StyleSheet, TextInput, Button, SafeAreaView, ScrollView, Pressable } from 'react-native';
import { Text, View } from './Themed';
import UserContext from '../utils/userContext'
import { API } from 'aws-amplify'; 
import { updateProfile, createBook, deleteBook} from '../src/graphql/mutations';
import { ActionType, Books } from '../types';
import { Octicons } from '@expo/vector-icons';

export default function EditProfile({ setViewMode, styles }) {
    const { state, dispatch } = useContext(UserContext);
    const nicknameVal = useRef(null);
    const genderVal = useRef(null);
    const aboutMeVal = useRef(null);
    const [book, setBook] = useState("");
    const [author, setAuthor] = useState("");
    
    async function handleSave() {
        // validation checks
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
    }

    async function handleAddBook() {
        // validation checks
        if (author === "" || book === "") {
            alert("Book and author fields must have a value");
            return;
        }
        const newBook:Books = {
            author: author,
            title: book,
            profileID: state.user.id
        }
        let addedBook = await API.graphql({query:createBook, variables:{input:newBook}});
        let updatedUser = {...state.user}
        updatedUser.books.items.push(addedBook.data.createBook);
        dispatch({type: ActionType.SetData, payload: updatedUser});
        setAuthor("");
        setBook("");
    }

    async function handleDeleteBook(book:Books) {
        let deleted = await API.graphql({query:deleteBook, variables:{ input:{ id:book.id, _version:book._version}}})
        let updatedUser = {...state.user};
        let ind = updatedUser.books.items.findIndex((book:any) => book.id === deleted.data.deleteBook.id)
        updatedUser.books.items.splice(ind, 1);
        dispatch({type: ActionType.SetData, payload: updatedUser});
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={[editStyles.bold, styles.headingText]}>Edit Profile</Text>
                </View>

                <View  style={styles.separator} ></View>

                <Text style={editStyles.bold}>Nickname:</Text>
                <TextInput
                    ref={nicknameVal}
                    style={[styles.input, editStyles.inputPadding]}
                    selectTextOnFocus={true}
                    defaultValue={state.user.nickname}
                />

                <Text style={editStyles.bold} >Gender:</Text>
                <TextInput
                    ref={genderVal}
                    style={[styles.input, editStyles.inputPadding]}
                    selectTextOnFocus={true}
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

                <Text style={editStyles.bold} >About me:</Text>
                    <TextInput
                        multiline
                        ref={aboutMeVal}
                        style={[styles.input, editStyles.inputPadding]}
                        selectTextOnFocus={true}
                        defaultValue={state.user.about_me}
                    />
                
                <View style={[editStyles.buttons,]}>
                    <Pressable
                        onPress={() => setViewMode("view")}
                        style={[styles.button, editStyles.cancelButton]}
                    >
                        <Text>Cancel</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => handleSave()}
                        style={[styles.button, editStyles.saveButton]}
                    >
                        <Text>Save</Text>
                    </Pressable>
                </View>

                <View  style={styles.separator} ></View>

                <Text style={[editStyles.bold,]} >Top Books (up to 5):</Text>
                <View style={styles.content}>
                    <View style={styles.listBooks}>
                    { 
                        state.user.books !== undefined ? state.user.books.items.filter(book => book._deleted !== true)
                        .map((book) => {
                            return (
                            <View key={book.id}
                                style={[editStyles.flexContainer]}>
                                <Pressable
                                    onPress={() => handleDeleteBook(book)}
                                    style={[editStyles.xContainer]}
                                >
                                    <Octicons name="trashcan" size={20} color="#F00" style={editStyles.xButton} />
                                </Pressable>
                                <Text style={styles.listItem}>
                                    {book.title} - {book.author}
                                </Text>
                            </View>
                            )
                        })
                    : null
                    }
                    </View>
                    {
                        state.user.books === undefined || state.user.books.items.filter(book => book._deleted !== true).length < 5 ?
                        (<>
                            <TextInput
                                onChangeText={setBook} 
                                value={book}
                                style={[styles.input, editStyles.inputPadding]}
                                placeholder='book title...'
                            />
                            <TextInput
                                onChangeText={setAuthor}
                                value={author}
                                style={[styles.input, editStyles.inputPadding]}
                                placeholder='author name...'
                            />
                            <Pressable
                                onPress={() => handleAddBook()}
                                style={[styles.button, editStyles.saveButton]}
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

const editStyles = StyleSheet.create({
    flexContainer: {
        flexDirection: "row", 
        display: "flex", 
        alignContent:"flex-start",
        alignItems: "center"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        textAlign: "center",
    },
    xButton: {
        color: "#000",
    },
    xContainer: {
        // borderColor: "#000",
        // borderRadius: 5,
        // borderWidth: 1,
        // backgroundColor: "#F00",
        width: 20,
        textAlign: "center",
        marginRight: 5,
        marginTop: 4,
        marginBottom: 3,
    },
    listBooks: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignContent: "space-around"
    },
    listItem: {
        flex: 6
    },
    saveButton: {
        backgroundColor: "#5CC166",
        width: 100,
    },
    cancelButton: {
        backgroundColor: "#FF925C",
        width: 100
    },
    bold: {
        fontWeight: "bold",
    },
    inputPadding: {
        padding: 5,
    },
});