import React, {useContext, useEffect, useState} from 'react'
import { StyleSheet, Image, Pressable, ScrollView, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import UserContext from '../utils/userContext';

export default function ViewProfile({ setViewMode, styles }) {
  const { state } = useContext(UserContext);
  const [usersBigBook, setUsersBigBook] = useState('')
  
  useEffect(()=>{
    if(!state.user.books || state.user.books.items.length === 0) return;
    setUsersBigBook(state.user.books.items[0].imgURL)
  }, [state])

  return (
    <ScrollView>
      <View style={[styles.container, widthStyles.container]}>
        <Text style={styles.title}>{state.user.username}</Text>
        <Image source={{uri:usersBigBook}} style={styles.profilePic} resizeMode="contain"></Image>
        <View style={[{flexDirection: 'row'}, {alignContent: 'space-around'}]}>
          <Text style={[styles.text, {margin: 10}, {borderBottomWidth: 1}]}>Nickname: <Text>{state.user.nickname}</Text></Text>
          <Text style={[styles.text, {margin: 10}, {borderBottomWidth: 1}]}>Gender: <Text>{state.user.gender}</Text></Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Top Books: </Text>
            { state.user.books !== undefined ? state.user.books.items.map((book) => {
            return (
              <View key={book.id}>
                <View>
                  <Text>{book.title} - {book.author}</Text>
                </View>
              </View>
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
          <Text style={styles.darkButtonText}>Edit Profile</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const widthStyles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width - 20
  }
})