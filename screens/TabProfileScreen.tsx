import {useEffect, useState} from 'react';
import * as React from 'react';
import { StyleSheet, Image, Button, TextInput } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { getProfile } from '../src/graphql/queries';
import {API, graphqlOperation} from 'aws-amplify'; 
import { Auth } from "@aws-amplify/auth";
import { updateProfile } from '../src/graphql/mutations';

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
        <Text onPress={()=>{
          updateThisProfile({gender:"M", username:"newUsername"})
        }}>Book2</Text>
        <TextInput style={styles.input}/>
        <Button
          onPress={() => setCount(count + 1)}
          title="+"
        />
      
      <Text>Top Genres: </Text>
        {/* <select>
          <option value="" selected></option>
          <option value="Thrillers">Thrillers</option>
          <option value="Business">Business</option>
          <option value="Romance">Romance</option>
        </select> */}
      <Text>Top Authors: </Text>
      <Text>Author1</Text>
        <Text>Author2</Text>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  }
});
