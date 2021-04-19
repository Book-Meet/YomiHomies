import {useEffect, useState, useContext} from 'react';
import * as React from 'react';
import { StyleSheet, Image, Button, TextInput, Alert, Modal, Pressable, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import {API} from 'aws-amplify'; 
import UserContext from '../utils/userContext';
import { updateProfile, createBook, createAuthor, createGenre } from '../src/graphql/mutations';
import EditProfile from '../components/EditProfile';


export default function TabProfileScreen() {
  const { state, dispatch } = useContext(UserContext)

  const [user, setUser]:any = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [books, setBooks] = useState([]);
  const [bookInput, setBookInput] = useState('');
  const [bookAuthorinput, setBookAuthorInput] = useState('')
  const [aboutMeText, setAboutMeText] = useState('')

  useEffect(()=>{
    if(state.user.id==='') return
    (async () =>{
      setUser(state.user); //for now I'm keeping this because the rest of the code in this screen is built around it.
      setBooks(state.user.books.items)
    })()
  }, [state]);

  async function handleUpdateProfile(newInfo:Object){ // send an object with the properties you want to change in the profiles
    newInfo = {id:user.id, _version:user._version, ...newInfo}; // should be set to state.user.....
    let mutation:any = await API.graphql({query:updateProfile, variables: {input:newInfo, id:user.id}})
    setUser(mutation.data.updateProfile)// we need to change the state.user with dispatch?
  }

  async function handleAddBook(){
    if (bookInput === '' || bookAuthorinput == '') return;
    let book:any = {
      title: bookInput,
      author: bookAuthorinput,
      profileID: user.id//state.user.id
    }
    setBookAuthorInput('')
    setBookInput('')
    let create:any = await API.graphql({query:createBook, variables:{input: book}});
    book.id = create.data.createBook.id
    let userUpdate = {...user};//state.user context
    userUpdate.books.items.push(book);// change user context
    setUser(userUpdate);//change here too
  }

  async function handleAddAuthor(newAuthor:String){//this can be ignored for now
    // let  addAuthor= await API.graphql({query:createAuthor, variables:{input:{name:newAuthor, profileID:user.id}}})
  }

  async function handleAddGenre(genre:String){// this too can be ignored for now
    // let addGenre = await API.graphql({query:createGenre, variables:{input:{genre, profileID:user.id}}})
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
      
      <Text>Top Authors: </Text>
        { state.user.authors !== undefined ? state.user.authors.items.map(auth => {
          return (
            <Text key={auth.id}>{auth.name}</Text>
          )
        })
        : null
        }

      <Text>About me: </Text>
      <Text>{state.user.about_me}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
        <EditProfile />
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
