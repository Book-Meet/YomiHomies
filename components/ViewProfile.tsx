import React, {useContext} from 'react'
import { StyleSheet, Image, Button, TextInput, Alert, Modal, Pressable, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import UserContext from '../utils/userContext';

export default function viewProfile({ setViewMode, styles }) {
  const { state } = useContext(UserContext);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{state.user.usename}</Text>
        <Image style={styles.profilePic} source={require('../assets/images/arina-reading.jpeg')} />


        {/* <Text style={styles.text}>Username: {state.user.username}</Text> */}
        <View style={[{flexDirection: 'row'}, {alignContent: 'space-around'}]}>
          <Text style={styles.text}>Nickname: {state.user.nickname}</Text>
          <Text style={styles.text}>Gender: {state.user.gender}</Text>
        </View>
        <Text style={[styles.text, {justifyContent:'flex-start'}]}>Top Books: </Text>
            { state.user.books !== undefined ? state.user.books.items.map(book => {
            return (
              <Text key={book.id}>{book.title} - {book.author}</Text>
            )
            })
            : null
            }
        
        <Text style={[styles.text, {justifyContent:'flex-start'}]}>Top Authors: </Text>
            { state.user.authors !== undefined ? state.user.authors.items.map(auth => {
            return (
              <Text key={auth.id}>{auth.name}</Text>
            )
            })
            : null
            }
        <Text style={[styles.text, {justifyContent:'flex-start'}]}>About me: </Text>
        <Text style={styles.text}>{state.user.about_me}</Text>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setViewMode("edit")}
        >
          <Text>Edit Profile</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    alignSelf: 'flex-start',
  },
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   profilePic: {
//       width: 100,
//       height: 100,
//       borderRadius: 10,
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
//   input: {
//     height: 40, 
//     borderWidth: 1
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//     marginBottom: 22
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF'
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3'
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center'
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center'
//   }
});