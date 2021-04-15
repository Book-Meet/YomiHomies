import {useEffect, useState} from 'react';
import * as React from 'react';
import { StyleSheet, Image, Button, TextInput } from 'react-native';
// import { StyleSheet, Image, Button, TextInput, StatusBar, SafeAreaView} from 'react-native';
// import RNMultiSelect, { IMultiSelectDataTypes } from "@freakycoder/react-native-multiple-select";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { getProfile } from '../src/graphql/queries';
import {API, graphqlOperation} from 'aws-amplify'; 
import { Auth } from "@aws-amplify/auth";
import { updateProfile, createBook, updateBook } from '../src/graphql/mutations';


export default function TabProfileScreen() {
  const [count, setCount] = useState(0);
  const [user, setUser]:any = useState({});
  

  useEffect(()=>{
    (async () =>{
      let authUser = await Auth.currentUserInfo();
      let query:any = await API.graphql(graphqlOperation(getProfile, {id:authUser.id}))
      query = query.data.getProfile;
      setUser(query);
    })()
  }, [])

  async function updateThisProfile(newInfo:Object){
    newInfo = {id:user.id, ...newInfo};
    console.log(newInfo);
    let mutation:any = await API.graphql({query:updateProfile, variables: {input:newInfo, id:user.id}})
    console.log(mutation.data.updateProfile);
    setUser(mutation.data.updateProfile)
  }

  async function addBook(newBook:Object){
    let book = {
      title: newBook.title,
      author: newBook.author
    }
    let create:any = await API.graphql({query:createBook, variables:{input: book}});
    console.log(create.data.createBook);
    let update:any = await API.graphql({query:updateBook, variables:{input:{id:create.data.createBook.id, profileID:user.id}}})
    setUser({...user})
  }

  return (
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
        <Text></Text>
        <Text>Book3</Text>
        <TextInput style={styles.input}/>
        <Button
          onPress={() => setCount(count + 1)}
          title="+"
        />
      
      <Text>Top Genres: </Text>
        <Text>Genre1</Text>
        <Text>Genre2</Text>
        <Text>Genre3</Text>
        
        {/* <select>
          <option value="" selected></option>
          <option value="Thrillers">Thrillers</option>
          <option value="Business">Business</option>
          <option value="Romance">Romance</option>
        </select> */}
      <Text>Top Authors: </Text>
        <Text>Author1</Text>
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

      {/* <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View
          style={{
            shadowRadius: 8,
            shadowOpacity: 0.3,
            shadowColor: "#757575",
            shadowOffset: {
              width: 0,
              height: 3,
            },
          }}
        >
          <RNMultiSelect
            disableAbsolute
            // fillColor="red"
            data={dynamicData}
            onSelect={(selectedItems) =>
              console.log("SelectedItems: ", selectedItems)
            }
          />
        </View>
      </SafeAreaView> */}
    </View>
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
  list: {
    paddingTop: 30,
    marginLeft: 10,
    marginRight: 10,
    flex: 3,
  },
  buttonView: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
});
