import Auth from '@aws-amplify/auth';
import React, {useState, useContext} from 'react';
import { StyleSheet, Pressable, Button } from 'react-native';
import Slider from '@react-native-community/slider';
// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import UserContext from '../utils/userContext';
import { ActionType } from '../types';
import Colors from '../constants/Colors';
import * as Linking from 'expo-linking';

export default function TabSettingsScreen() {
const { state, dispatch } = useContext(UserContext)
const [filterRadius, setFilterRadius] = useState(state.user.searchRadius);// should we load from storage the users search radius?

console.log(state.user.searchRadius)
  function setUserFilter(v){
    setFilterRadius(v)
    let updatedUser ={...state.user};
    updatedUser.searchRadius = v;
    dispatch({type:ActionType.SetData, payload:updatedUser});
    dispatch({type:ActionType.Search})
  }

  function logOut(){
    dispatch({type:ActionType.setData, payload:null})
    Auth.signOut()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preferences</Text>
      {filterRadius && <Text>Search Radius: {filterRadius}km</Text>}
      {!filterRadius && <Text>No Search Limit</Text>}
      <Text>User's Current Lat: {(Math.round(state.user.latitude * 10)) / 10}</Text>
      <Text>User's Current Lng: {(Math.round(state.user.longitude * 10)) / 10}</Text>
      <Slider
        style={{width: 200, height: 30}}
        marginTop={10}
        minimumValue={0}
        maximumValue={500}
        minimumTrackTintColor="black"
        maximumTrackTintColor="blue"
        onValueChange={(v)=>setFilterRadius(v)}
        value={500}
        onSlidingComplete={setUserFilter}
      />
      <Button title="No limit" onPress={()=>setUserFilter(null)}></Button>
      
      <View style={styles.container}>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Pressable style={styles.button} accessibilityLabel="Log out" onPress={logOut}>
          <Text>Log Out</Text>
        </Pressable>
        <Pressable>
          <Text onPress={() => Linking.openURL('https://www.privacypolicies.com/live/b30a8a88-df01-4cf4-8083-99b75e2ea9fa')}>
            Tap to view privacy policy
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  title: {
    marginTop: 80,
    fontSize: 20,
    fontWeight: 'bold',
  },
  radius: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10,
    textAlign: "center",
    backgroundColor: Colors.pallete.atomicTangerine,
  },
  switches: {
    alignItems: "flex-start"
  },
  matchGender: {
    marginTop: 50,
  }
});
