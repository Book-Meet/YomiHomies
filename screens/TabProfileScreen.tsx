import {useEffect, useState, useContext} from 'react';
import * as React from 'react';
import { StyleSheet, Image, Button, TextInput, Alert, Modal, Pressable, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { getProfile } from '../src/graphql/queries';
import {API, graphqlOperation} from 'aws-amplify'; 
import { Auth } from "@aws-amplify/auth";
import UserContext from '../utils/userContext';
import { updateProfile, createBook, createAuthor, createGenre, updateBook } from '../src/graphql/mutations';


const items = [
  {
    id: 1,
    name: 'Thrillers'
  },
  {
    id: 2,
    name: 'Business'
  },
  {
    id: 3,
    name: 'Romance'
  },
  {
    id: 4,
    name: 'Technology'
  },
  {
    id: 5,
    name: 'Comics'
  }
];

export default function TabProfileScreen() {
  const [count, setCount] = useState(0);
  const { state, dispatch } = useContext(UserContext)

  const [user, setUser]:any = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [books, setBooks] = useState([]);
  const [bookInput, setBookInput] = useState('');
  const [bookAuthorinput, setBookAuthorInput] = useState('')
  const [aboutMeText, setAboutMeText] = useState('')

  useEffect(()=>{
    (async () =>{
      let authUser = await Auth.currentUserInfo();
      let query:any = await API.graphql(graphqlOperation(getProfile, {id:authUser.id}))
      query = query.data.getProfile;
      setUser(query);
      setBooks(query.books.items)
    })()
  }, []);

  async function handleUpdateProfile(newInfo:Object){ // send an object with the properties you want to change in the profiles
    newInfo = {id:user.id, _version:user._version, ...newInfo};
    let mutation:any = await API.graphql({query:updateProfile, variables: {input:newInfo, id:user.id}})
    // console.log(mutation.data.updateProfile);
    setUser(mutation.data.updateProfile)
  }

  async function handleAddBook(){
    if (bookInput === '' || bookAuthorinput == '') return;
    let book:any = {
      title: bookInput,
      author: bookAuthorinput,
      profileID: user.id
    }
    setBookAuthorInput('')
    setBookInput('')
    let create:any = await API.graphql({query:createBook, variables:{input: book}});
    book.id = create.data.createBook.id
    let userUpdate = {...user};
    userUpdate.books.items.push(book);
    setUser(userUpdate);
  }

  async function handleAddAuthor(newAuthor:String){
    // let  addAuthor= await API.graphql({query:createAuthor, variables:{input:{name:newAuthor, profileID:user.id}}})
    // console.log(addAuthor);
  }

  async function handleAddGenre(genre:String){
    let addGenre = await API.graphql({query:createGenre, variables:{input:{genre, profileID:user.id}}})
  }


  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Image style={{
            width: 100,
            height: 100
          }} source={require('../assets/images/arina-reading.jpeg')} />
      
      
      <Text>Username: {state.user.username}</Text>
      <Text>Nickname: {state.user.nickname}</Text>
      <Text>Gender: {state.user.gender}</Text>
      <Text>Top Books: </Text>
        { state.user.books !== undefined ? state.user.books.items.map(book => {
          return (
            <Text key={book.id}>{book.title} - {book.author}</Text>
          )
        })
        : null
        }
        <TextInput style={styles.input}
          placeholder="Book Title"
          onChangeText={(text)=>{setBookInput(text)}}
        />
        <TextInput style={styles.input}
          placeholder="Author"
          onChangeText={(text)=>{setBookAuthorInput(text)}}
          />
        <Button
          onPress={handleAddBook}
          title="+"
        />
      
      {/* <Text>Top Genres: </Text>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText} onPress={()=>{handleAddGenre("Thriller")}}>Genre1</Text>
              <Text style={styles.modalText}>Genre2</Text>
              <Text style={styles.modalText}>Genre3</Text>
              <Text style={styles.modalText}>Genre4</Text>
              <Text style={styles.modalText}>Genre5</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Select Genre</Text>
        </Pressable>
      </View> */}

        {/* <select>
          <option value="" selected></option>
          <option value="Thrillers">Thrillers</option>
          <option value="Business">Business</option>
          <option value="Romance">Romance</option>
        </select> */}

      <Text>Top Authors: </Text>
        { state.user.authors !== undefined ? state.user.authors.items.map(auth => {
          return (
            <Text key={auth.id}>{auth.name}</Text>
          )
        })
        : null
        }
        <Text onPress={()=>{handleAddAuthor("Someone")}}>Author1</Text>
        <Text>Author2</Text>
        <Text>Author3</Text>
        <TextInput style={styles.input}/>
        <Button
          onPress={() => setCount(count + 1)}
          title="+"
        /> */}
      <Text>About me: </Text>
        <Text>{state.user.about_me}</Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput placeholder="write here"
                value={aboutMeText}
                onChangeText={(text)=>{setAboutMeText(text)}}
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
              
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  handleUpdateProfile({about_me:aboutMeText})
                  setModalVisible(!modalVisible)}}
              >
                <Text style={styles.textStyle}>Submit</Text>
              </Pressable>

            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Change About Me</Text>
        </Pressable>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40, 
    borderWidth: 1
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    marginBottom: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: '#F194FF'
  },
  buttonClose: {
    backgroundColor: '#2196F3'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
});
