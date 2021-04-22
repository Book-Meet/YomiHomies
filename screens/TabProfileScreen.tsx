import React, {useState, useContext} from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import ViewProfile from '../components/ViewProfile';
import EditProfile from '../components/EditProfile';


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
    height: "100%"
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
    elevation: 2,
    margin: 10,
    textAlign: "center"
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
