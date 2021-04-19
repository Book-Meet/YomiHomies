import React, {useState, useContext} from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import ViewProfile from '../components/ViewProfile';

// These imports may not be needed here. They'll probably get moved to the EditProfile component
import {API} from 'aws-amplify'; 
import { updateProfile, createBook, createAuthor, createGenre } from '../src/graphql/mutations';
import { ActionType } from '../types';
import UserContext from '../utils/userContext';



export default function TabProfileScreen() {
  const [viewMode, setViewMode] = useState("view");
  
  // Probably everything below from here until the return value can be moved to the editProfile component.
  const {dispatch} = useContext(UserContext)
  const [user, setUser]:any = useState({}); // delete
  const [modalVisible, setModalVisible] = useState(false); // move to viewProfile?
  const [books, setBooks] = useState([]);
  const [bookInput, setBookInput] = useState('');
  const [bookAuthorinput, setBookAuthorInput] = useState('')
  const [aboutMeText, setAboutMeText] = useState('')

  async function handleUpdateProfile(newInfo:Object){ // send an object with the properties you want to change in the profiles
    newInfo = {id:user.id, _version:user._version, ...newInfo}; // should be set to state.user.....
    let mutation:any = await API.graphql({query:updateProfile, variables: {input:newInfo, id:user.id}})
    dispatch({type: ActionType.SetData, payload: mutation.data.updateProfile});
    //setUser(mutation.data.updateProfile)// we need to change the state.user with dispatch?
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
    <View style={styles.container}>
      { viewMode === "view" ?
      <ViewProfile setViewMode={setViewMode} styles={styles}/>
      :
      null }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 10,
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
