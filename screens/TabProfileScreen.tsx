import React, {useState, useContext} from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import ViewProfile from '../components/ViewProfile';
import EditProfile from '../components/EditProfile';
import Colors from '../constants/Colors';


export default function TabProfileScreen() {
  const [viewMode, setViewMode] = useState("view");

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
      <EditProfile setViewMode={setViewMode} styles={styles} /> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 10,
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    width: "100%",
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
    elevation: 2,
    margin: 10,
    textAlign: "center"
  },
  buttonOpen: {
    backgroundColor: Colors.pallete.lapisLazuli,
  },
  buttonClose: {
    backgroundColor: Colors.pallete.atomicTangerine,
  },
  darkButtonText: {
    color: Colors.pallete.white,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  },
  text: {
    lineHeight: 20,
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  headingText: {
    fontSize: 20,
  },
  content: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

