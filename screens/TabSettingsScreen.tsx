import Auth from '@aws-amplify/auth';
import React, {useState, useContext} from 'react';
import { StyleSheet, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';
// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import UserContext from '../utils/userContext';
import { ActionType } from '../types';
import Colors from '../constants/Colors';
import * as Linking from 'expo-linking';

export default function TabSettingsScreen() {
  const [filterRadius, setFilterRadius] = useState(100);
  const { state, dispatch } = useContext(UserContext)

  function setUserFilter(){
    let updatedUser ={...state.user};
    updatedUser.searchRadius = filterRadius;
    dispatch({type:ActionType.SetData, payload:updatedUser});
    dispatch({type:ActionType.Search})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preferences</Text>
      <Text style={styles.radius}>Search Radius: {(Math.round(filterRadius * 10)) / 10}km</Text>
      <Text>User's Current Lat: {(Math.round(state.user.latitude * 10)) / 10}km</Text>
      <Text>User's Current Lng: {(Math.round(state.user.longitude * 10)) / 10}km</Text>
      <Slider
        style={{width: 200, height: 30}}
        minimumValue={0}
        maximumValue={500}
        minimumTrackTintColor="black"
        maximumTrackTintColor="blue"
        onValueChange={(v)=>setFilterRadius(v)}
        value={500}
        onSlidingComplete={setUserFilter}
      />
      <View style={styles.container}>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Pressable style={styles.button} accessibilityLabel="Log out" onPress={()=>Auth.signOut()}>
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
  },
  title: {
    marginTop: 50,
    fontSize: 20,
    fontWeight: 'bold',
  },
  radius: {
    alignItems: 'center',
    justifyContent: 'center',
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
