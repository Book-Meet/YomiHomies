import Auth from '@aws-amplify/auth';
import * as React from 'react';
import { StyleSheet, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import UserContext from '../utils/userContext';
import { User, ActionType} from '../types'

const data: User = {
  id: "1234",
  username: "Banana Sandwich",
  // latitude: 
  // longitude?: Number; 
  // books?: Array<Books>;
  // authors?: Array<String>;
  // genres?: Array<String>;
  // matches?: Array<User>;
  // pending?: Array<User>;
  // rejection?: Array<User>;
  // gender?: String;
  // openToMeet?: Boolean
}

export default function TabSettingsScreen() {
  const { state, dispatch } = React.useContext(UserContext)
  console.log(dispatch)

  React.useEffect(() => {
    dispatch({type: ActionType.LoadData, payload: data})
    console.log(state);
  }, [])

  React.useEffect(() => {
    console.log("state", state);
  }, [state])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
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
