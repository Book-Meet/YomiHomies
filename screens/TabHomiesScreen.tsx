import * as React from 'react';
import {useState, useEffect, useContext} from 'react';
import { StyleSheet, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {Text, View} from '../components/Themed'
import Colors from '../constants/Colors';
import { navItem } from '@aws-amplify/ui';
import API from '@aws-amplify/api';
import UserContext from '../utils/userContext';
import {listBooks, listMatchs} from '../src/graphql/queries';

interface matchItem {
  id: Number;
  nickname: String;
  chatPreview: String;
  newMessages: Number;
}

let DATA: matchItem[] = [
  {
    id: 1,
    nickname: "GuyWithFace",
    chatPreview: "I have a face! I like Books!",
    newMessages: 0
  },
  {
    id: 2,
    nickname: "GirlWithFace",
    chatPreview: "I have a face too! I like Books!",
    newMessages: 0
  },
  {
    id: 3,
    nickname: "GirlWithBook",
    chatPreview: "I have a book! I like Faces!",
    newMessages: 2
  },
  {
    id: 4,
    nickname: "GirlWithFace",
    chatPreview: "I have a face! I like Books!",
    newMessages: 1
  },
  {
    id: 5,
    nickname: "DogWithFace",
    chatPreview: "I'm a dog with a face'! I like eating Books!",
    newMessages: 0
  },
  {
    id: 6,
    nickname: "DogWithBook",
    chatPreview: "I'm a dog with a book I used to have a book but I ate it...! I like eating Books!",
    newMessages: 0
  },
  {
    id: 7,
    nickname: "Booksy Williams",
    chatPreview: "I'm a dog with a book I used to have a book but I ate it...! I like eating Books!",
    newMessages: 0
  },
  {
    id: 8,
    nickname: "The Yomiest of all Homies",
    chatPreview: "I'm a dog with a book I used to have a book but I ate it...! I like eating Books!",
    newMessages: 0
  },
  {
    id: 9,
    nickname: "You've never Yomied like me",
    chatPreview: "I'm a dog with a book I used to have a book but I ate it...! I like eating Books!",
    newMessages: 0
  },
  {
    id: 10,
    nickname: "Daddy's Home",
    chatPreview: "I'm a dog with a book I used to have a book but I ate it...! I like eating Books!",
    newMessages: 0
  },
  {
    id: 11,
    nickname: "Crokus",
    chatPreview: "I'm a dog with a book I used to have a book but I ate it...! I like eating Books!",
    newMessages: 0
  },
]


export default function TabHomiesScreen() {

  const {state, dispatch} = useContext(UserContext);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if(state.user.id === '') return
    (async function() {
      let filter = { and: [{matcheeID: {eq: state.user.id }}, {status: {eq: "accepted"}}]}
      let myMatchers = await API.graphql({query:listMatchs, variables: {filter: filter}});
      myMatchers = myMatchers.data.listMatchs.items;
      let myMatchees = state.user.match.items.filter(a => a.status === 'accepted').map(a => a.matcheeID);
      let matches = myMatchers.filter(a => myMatchees.includes(a.matcherID)).map(a=>a.matcherProfile);
      setMatches(matches)
    })()
  }, [state])


  const renderItem = ({item}:any) => {
    if (state.user.id ==='') return null;
    // console.log(item);
    return (
      // <View style={styles.item}>
      <TouchableOpacity>
        <Image style={styles.icons} source={{uri:"https://i.ibb.co/f8vR1P8/ace.jpg"}} />
        <Text style={styles.nickname}>{"Name: " + item.username}</Text>
        <Text>{"Gender: " + item.gender}</Text>
        {/* <Text>{"Books: " + item.books}</Text> */}
        <Text>{"About Me: " + item.about_me}</Text>
        {/* <Text style={styles.chatPreview}>{item.chatPreview}</Text> */}
      </TouchableOpacity>
      // </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      { matches.length !== 0 ? (
        <>
          <FlatList
            data={matches}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
          />
        </>
      ) :
        <Text>No Matches, yet...</Text>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  nickname: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    padding: 20,
    marginVertical: 0,
    marginHorizontal: 0,
    borderRadius: 8,
    borderColor: '#333333',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '100%'
  },
  chatPreview: {
    fontSize: 10,
    overflow: 'visible',
  },
  icons: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 10,
  }
});