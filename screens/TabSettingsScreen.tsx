import Auth from '@aws-amplify/auth';
import React, {useState, useContext} from 'react';
import { StyleSheet, Pressable, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import UserContext from '../utils/userContext';
import { ActionType } from '../types';
import { CheckBox } from 'react-native-elements';
// import CheckBox from '@react-native-community/checkbox';
import Colors from '../constants/Colors';
import * as Linking from 'expo-linking';


export default function TabSettingsScreen() {

  const [gender, setGender] = useState([
    {name: 'male', id: '1'},
    {name: 'female', id: '2'},
    {name: 'Others', id: '3'},
    {name: 'Any', id: '4'},
  ]);

  const { state, dispatch } = useContext(UserContext)
  const [filterRadius, setFilterRadius] = useState(state.user.searchRadius);
  const [isSelected, setSelection] = useState(false);

  function setUserFilter(){
    let updatedUser ={...state.user};
    updatedUser.searchRadius = filterRadius;
    dispatch({type:ActionType.SetData, payload:updatedUser});
    dispatch({type:ActionType.Search})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preferences</Text>
      {filterRadius && <Text>Search Radius: {filterRadius}km</Text>}
      {!filterRadius && <Text>No Search Limit</Text>}
      <Text>User's Current Lat: {state.user.latitude}km</Text>
      <Text>User's Current Lng: {state.user.longitude}km</Text>
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
      <Button title="No limit" onPress={()=>setFilterRadius(null)}></Button>
      
      
      <View style={styles.container}>
        {/* <Text>Matching Genders:</Text>
        <CheckBox
          title='Male'
          value={isSelected}
          onValueChange={setSelection}
        />
        <CheckBox
          title='Female'
          checked={state.checked}
        />
        <CheckBox
          title='Others'
          checked={state.checked}
        />
        <CheckBox
          title='Any'
          checked={state.checked}
          />
          <Text>Open to Meet Face to Face?</Text>
        <Text>Yes</Text><Text>No</Text> */}

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
    fontSize: 20,
    fontWeight: 'bold',
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
});
