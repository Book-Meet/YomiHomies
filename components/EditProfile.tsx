import React, { useContext, useRef, useState } from 'react';
import { StyleSheet, TextInput, SafeAreaView, ScrollView, Pressable, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import { Text, View } from './Themed';
import UserContext from '../utils/userContext'
import { API } from 'aws-amplify'; 
import { updateProfile, createBook, deleteBook, createAuthor, deleteAuthor, createGenre, deleteGenre} from '../src/graphql/mutations';
import { ActionType, Books, Authors, Genres } from '../types';
import { Octicons } from '@expo/vector-icons';
import Colors from '../constants/Colors'

export default function EditProfile({ setViewMode, styles }) {
    const { state, dispatch } = useContext(UserContext);
    const [nickname, setNickname] = useState(state.user.nickname || "");
    const [gender, setGender] = useState(state.user.gender || "");
    const [aboutMe, setAboutMe] = useState(state.user.about_me || "");
    const [book, setBook] = useState("");
    const [author, setAuthor] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [favAuthor, setFavAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [imgURL, setImgURL] = useState('');

    //Google Books API
    async function bookSearch(val) {
        setBook(val);
        if (val === "" || val.replace(/\s/g, '') === "") {
            setSearchResult([]);
            return;
        } 
        await fetch(`https://www.googleapis.com/books/v1/volumes?q=${val}&key=AIzaSyAwyO1wyyKB3ymXXdLNxI8a-sHnHjAku88`)
            .then(res => res.json())
            .then(result => {
                setSearchResult(result.items);
            });
        
    }

    const pressHandler = (item) => {
        setSearchResult([]);
        setBook(item.title);
        setImgURL(item.imageLinks.smallThumbnail)
        setAuthor(item.authors[0]);
    }

    const renderItem = ({item}) => {
        if(searchResult.length === 0) return null;
        return (
            <TouchableOpacity
                onPress={() => pressHandler(item.volumeInfo)}
                style={editStyles.searchResult}
            >
                <Text>{item.volumeInfo.title}</Text>
            </TouchableOpacity>
        )
    }
    
    async function handleSave() {
        // validation checks
        if (nickname === "" || gender === ""
        || aboutMe === "") {
            alert("No blank fields allowed!");
            return;
        }
        const newVals = {
            id: state.user.id,
            nickname: nickname,
            gender: gender,
            about_me: aboutMe,
            latitude: state.user.latitude,
            longitude: state.user.longitude
        }
        let updated:any = await API.graphql({query:updateProfile, variables: {input:newVals, id:state.user.id}})
        dispatch({type: ActionType.SetData, payload: updated.data.updateProfile});
        setViewMode("view");
    }

    // Edit favorite books
    async function handleAddBook() {
        // validation checks
        if (author === "" || book === "") {
            alert("Book and author fields must have a value");
            return;
        }
        const newBook:Books = {
            author: author,
            title: book,
            profileID: state.user.id,
            imgURL: imgURL
        }
        let addedBook = await API.graphql({query:createBook, variables:{input:newBook}});
        let updatedUser = {...state.user}
        updatedUser.books.items.push(addedBook.data.createBook);
        dispatch({type: ActionType.SetData, payload: updatedUser});
        setAuthor("");
        setBook("");
        dispatch({type: ActionType.Search});
    }

    async function handleDeleteBook(book:Books) {
        let deleted = await API.graphql({query:deleteBook, variables:{ input:{ id:book.id}}})
        let updatedUser = {...state.user};
        let ind = updatedUser.books.items.findIndex((book:any) => book.id === deleted.data.deleteBook.id)
        updatedUser.books.items.splice(ind, 1);
        dispatch({type: ActionType.SetData, payload: updatedUser});
        dispatch({type: ActionType.Search});
    }

    // Edit favorite authors
    async function handleAddAuthor() {
        // validation checks
        if (favAuthor === "") {
            alert("Author fields must have a value");
            return;
        }
        const newAuthor:Authors = {
            name: favAuthor,
            profileID: state.user.id
        }
        let addedAuthor = await API.graphql({query:createAuthor, variables:{input:newAuthor}});
        let updatedUser = {...state.user}
        updatedUser.authors.items.push(addedAuthor.data.createAuthor);
        dispatch({type: ActionType.SetData, payload: updatedUser});
        setFavAuthor("");
    }

    async function handleDeleteAuthor(author:Authors) {
        let deleted = await API.graphql({query:deleteAuthor, variables:{ input:{ id:author.id}}})
        let updatedUser = {...state.user};
        let ind = updatedUser.authors.items.findIndex((author:any) => author.id === deleted.data.deleteAuthor.id)
        updatedUser.authors.items.splice(ind, 1);
        dispatch({type: ActionType.SetData, payload: updatedUser});
    }

    // Edit favorite genres
    async function handleAddGenre() {
        // validation checks
        if (genre === "") {
            alert("Genre fields must have a value");
            return;
        }
        const newGenre:Genres = {
            genre: genre,
            profileID: state.user.id
        }
        let addedGenre = await API.graphql({query:createGenre, variables:{input:newGenre}});
        let updatedUser = {...state.user}
        updatedUser.genres.items.push(addedGenre.data.createGenre);
        dispatch({type: ActionType.SetData, payload: updatedUser});
        setGenre("");
    }

    async function handleDeleteGenre(genre:Genres) {
        let deleted = await API.graphql({query:deleteGenre, variables:{ input:{ id:genre.id}}})
        let updatedUser = {...state.user};
        let ind = updatedUser.genres.items.findIndex((genre:any) => genre.id === deleted.data.deleteGenre.id)
        updatedUser.genres.items.splice(ind, 1);
        dispatch({type: ActionType.SetData, payload: updatedUser});
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
                <ScrollView style={editStyles.margin}>
                    <View style={styles.header}>
                        <Text style={[editStyles.bold, styles.headingText]}>Edit Profile</Text>
                    </View>

                    <View  style={styles.separator} ></View>

                    <Text style={editStyles.bold}>Nickname:</Text>
                    <TextInput
                        style={[styles.input, editStyles.inputPadding, ]}
                        selectTextOnFocus={true}
                        value={nickname}
                        onChangeText={setNickname}
                    />

                    <Text style={editStyles.bold} >Gender:</Text>
                    <TextInput
                        style={[styles.input, editStyles.inputPadding]}
                        selectTextOnFocus={true}
                        value={gender}
                        onChangeText={setGender}
                    />


                    <Text style={editStyles.bold} >About me:</Text>
                        <TextInput
                            multiline
                            style={[styles.input, editStyles.inputPadding]}
                            selectTextOnFocus={true}
                            value={aboutMe}
                            onChangeText={setAboutMe}
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
                            <Text style={styles.darkButtonText}>Save</Text>
                        </Pressable>
                    </View>

                    <View  style={styles.separator} ></View>

                    <Text style={[editStyles.bold,]} >Top Books (up to 5):</Text>
                    <View style={styles.content}>
                        <View style={styles.lists}>
                        { 
                            state.user.books !== undefined ? state.user.books.items.map((book) => {
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
                            state.user.books === undefined || state.user.books.items.length < 5 ?
                            (<>
                                <TextInput
                                    onChangeText={bookSearch}
                                    value={book}
                                    style={[styles.input, editStyles.inputPadding, editStyles.width]}
                                    placeholder='book title?'
                                    />
                                    
                                <FlatList
                                    renderItem={renderItem}
                                    data={searchResult.length > 0 ? searchResult : []}
                                    keyExtractor={(item, index) => index.toString()}
                                    style={editStyles.searchResult}
                                    />

                                <Pressable
                                    onPress={() => handleAddBook()}
                                    style={[styles.button, editStyles.saveButton]}
                                    >
                                    <Text style={styles.darkButtonText}>Add Book</Text>
                                </Pressable>
                            </>)
                            : null
                        }
                    </View>

                    <View  style={styles.separator} ></View>

                    <Text style={[editStyles.bold,]}>Top Authors (up to 3):</Text>
                    <View style={styles.content}>
                        <View style={styles.lists}>
                        { 
                            state.user.authors !== undefined ? state.user.authors.items.map((author) => {
                                return (
                                    <View key={author.id}
                                    style={[editStyles.flexContainer]}>
                                    <Pressable
                                        onPress={() => handleDeleteAuthor(author)}
                                        style={[editStyles.xContainer]}
                                        >
                                        <Octicons name="trashcan" size={20} color="#F00" style={editStyles.xButton} />
                                    </Pressable>
                                    <Text style={styles.listItem}>
                                        {author.name}
                                    </Text>
                                </View>
                                )
                            })
                            : null
                        }
                        </View>
                        {
                            state.user.authors === undefined || state.user.authors.items.length < 3 ?
                            (<>
                                <TextInput
                                    onChangeText={setFavAuthor}
                                    value={favAuthor}
                                    style={[styles.input, editStyles.inputPadding]}
                                    placeholder='Favorite Author?'
                                    />

                                <Pressable
                                    onPress={() => handleAddAuthor()}
                                    style={[styles.button, editStyles.saveButton]}
                                    >
                                    <Text style={styles.darkButtonText}>Add Author</Text>
                                </Pressable>
                            </>)
                            : null
                        }
                    </View>

                    <View  style={styles.separator} ></View>

                    <Text style={[editStyles.bold,]}>Top Genres (up to 3):</Text>
                    <View style={styles.content}>
                        <View style={styles.lists}>
                        { 
                            state.user.genres !== undefined ? state.user.genres.items.map((genre) => {
                                return (
                                    <View key={genre.id}
                                    style={[editStyles.flexContainer]}>
                                    <Pressable
                                        onPress={() => handleDeleteGenre(genre)}
                                        style={[editStyles.xContainer]}
                                        >
                                        <Octicons name="trashcan" size={20} color="#F00" style={editStyles.xButton} />
                                    </Pressable>
                                    <Text style={styles.listItem}>
                                        {genre.genre}
                                    </Text>
                                </View>
                                )
                            })
                            : null
                        }
                        </View>
                        {
                            state.user.genres === undefined || state.user.genres.items.length < 3 ?
                            (<>
                                <TextInput
                                    onChangeText={setGenre}
                                    value={genre}
                                    style={[styles.input, editStyles.inputPadding]}
                                    placeholder='Favorite Genre?'
                                    />

                                <Pressable
                                    onPress={() => handleAddGenre()}
                                    style={[styles.button, editStyles.saveButton]}
                                    >
                                    <Text style={styles.darkButtonText}>Add Genre</Text>
                                </Pressable>
                            </>)
                            : null
                        }
                    </View>

                </ScrollView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

const editStyles = StyleSheet.create({
    flexContainer: {
        flexDirection: "row", 
        display: "flex", 
        alignContent:"flex-start",
        alignItems: "center",
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        textAlign: "center",
    },
    xButton: {
        color: Colors.pallete.darkCornflowerBlue,
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
    lists: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignContent: "space-around"
    },
    listItem: {
        flex: 6
    },
    saveButton: {
        backgroundColor: Colors.pallete.lapisLazuli,
        color: Colors.pallete.white,
        width: 100,
    },
    cancelButton: {
        backgroundColor: Colors.pallete.atomicTangerine,
        width: 100
    },
    bold: {
        fontWeight: "bold",
    },
    inputPadding: {
        padding: 5,
    },
    searchResult: {
        width: '100%',
        paddingHorizontal: 10,
    },
    margin: {
        marginHorizontal: 10
    },
    width: {
        width: Dimensions.get('window').width - 20
    }
});