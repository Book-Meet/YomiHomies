import {useEffect, useState} from 'react';
import * as React from 'react';
import { StyleSheet, Image, Button, TextInput, Alert, Modal, Pressable, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { getProfile } from '../src/graphql/queries';
import {API, graphqlOperation} from 'aws-amplify'; 
import { Auth } from "@aws-amplify/auth";
import { updateProfile, createBook, createAuthor, createGenre } from '../src/graphql/mutations';


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
  const [user, setUser]:any = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  

  useEffect(()=>{
    (async () =>{
      let authUser = await Auth.currentUserInfo();
      let query:any = await API.graphql(graphqlOperation(getProfile, {id:authUser.id}))
      query = query.data.getProfile;
      setUser(query);
    })()
  }, [])

  async function handleUpdateProfile(newInfo:Object){ // send an object with the properties you want to change in the profiles
    newInfo = {id:user.id, ...newInfo};
    console.log(newInfo);
    let mutation:any = await API.graphql({query:updateProfile, variables: {input:newInfo, id:user.id}})
    console.log(mutation.data.updateProfile);
    setUser(mutation.data.updateProfile)
  }

  async function handleAddBook(newBook:any){
    let book:any = {
      title: newBook.title,
      author: newBook.author,
      profileID: user.id
    }
    let create:any = await API.graphql({query:createBook, variables:{input: book}});
    console.log(create.data.createBook);
  }

  async function handleAddAuthor(newAuthor:String){
    let  addAuthor= await API.graphql({query:createAuthor, variables:{input:{name:newAuthor, profileID:user.id}}})
    console.log(addAuthor);
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
      
      
      <Text>Username: {user.username}</Text>
      <Text>Nickname: Ari</Text>
      <Text>Gender: Female</Text>
      <Text>Top Books: </Text>
        <Text>Book1</Text>
        <Text>Book2</Text>
        <Text>Book3</Text>
        <TextInput style={styles.input}/>
        <Button
          onPress={() => setCount(count + 1)}
          title="+"
        />
      
      <Text>Top Genres: </Text>
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
      </View>

        {/* <select>
          <option value="" selected></option>
          <option value="Thrillers">Thrillers</option>
          <option value="Business">Business</option>
          <option value="Romance">Romance</option>
        </select> */}

      <Text>Top Authors: </Text>
        <Text onPress={()=>{handleAddAuthor("Someone")}}>Author1</Text>
        <Text>Author2</Text>
        <Text>Author3</Text>
        <TextInput style={styles.input}/>
        <Button
          onPress={() => setCount(count + 1)}
          title="+"
        />
      <Text>About me: </Text>
        <Text>Hello!!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
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
