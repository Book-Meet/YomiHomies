import Auth from '@aws-amplify/auth';
import * as React from 'react';
import { StyleSheet, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import UserContext from '../utils/userContext';


export default function TabSettingsScreen() {
  // these two lines are just for testing purposes to see if the loaded 
  // context (done in App.tsx) is available here. It's available along with
  // the dispatchers. 
  const { state, dispatch } = React.useContext(UserContext)

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
