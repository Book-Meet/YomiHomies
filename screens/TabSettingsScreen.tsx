import Auth from '@aws-amplify/auth';
import React, {useState, useContext} from 'react';
import { StyleSheet, Button,  } from 'react-native';
import Slider from '@react-native-community/slider';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import UserContext from '../utils/userContext';
import { ActionType } from '../types';


export default function TabSettingsScreen() {

  const [gender, setGender] = useState([
    {name: 'male', id: '1'},
    {name: 'female', id: '2'},
    {name: 'Others', id: '3'},
    {name: 'Any', id: '4'},
  ]);

  const [filterRadius, setFilterRadius] = useState(100);
  const { state, dispatch } = useContext(UserContext)

  function setUserFilter(){
    let updatedUser ={...state.user};
    updatedUser.searchRadius = filterRadius;
    dispatch({type:ActionType.SetData, payload:updatedUser});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preferences</Text>
      <Text>Search Radius: {filterRadius}km</Text>
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
      
      
      <Text>Matching Genders:</Text>
      <Text>Male</Text>
      <Text>Female</Text>
      <Text>Others</Text>
      <Text>Any</Text>
      <Text>Open to Meet Face to Face?</Text>
      <Text>Yes</Text><Text>No</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      <Button title="Log out" accessibilityLabel="Log out" onPress={()=>Auth.signOut()}></Button>
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
});
