import React, {useContext} from 'react'
import { StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import UserContext from '../utils/userContext';

export default function ViewProfile({ setViewMode, styles }) {
  const { state } = useContext(UserContext);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}> {state.user.username}</Text>
        <Image style={styles.profilePic} source={require('../assets/images/arina-reading.jpeg')} />


        <View style={[{flexDirection: 'row'}, {alignContent: 'space-around'}]}>
          <Text style={[styles.text, {margin: 10}, {borderBottomWidth: 1}]}>Nickname: <Text>{state.user.nickname}</Text></Text>
          <Text style={[styles.text, {margin: 10}, {borderBottomWidth: 1}]}>Gender: <Text>{state.user.gender}</Text></Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Top Books: </Text>
            { state.user.books !== undefined ? state.user.books.items.map(book => {
            return (
              <Text key={book.id}>{book.title} - {book.author}</Text>
            )
            })
            : null
            }
        
          <Text style={styles.text}>Top Authors: </Text>
            { state.user.authors !== undefined ? state.user.authors.items.map(author => {
            return (
              <Text key={author.id}>{author.name}</Text>
            )
            })
            : null
            }
        
          <Text style={styles.text}>Top Genres: </Text>
            { state.user.genres !== undefined ? state.user.genres.items.map(genre => {
            return (
              <Text key={genre.id}>{genre.genre}</Text>
            )
            })
            : null
            }

          <Text style={styles.text}>About me: </Text>
          <Text>{state.user.about_me}</Text>
        </View>
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
  content: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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