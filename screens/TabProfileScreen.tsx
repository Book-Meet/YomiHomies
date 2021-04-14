import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Image style={{
            width: 100,
            height: 100
          }} source={require('../assets/images/arina-reading.jpeg')} />
      <div>Username: Arina</div>
      <div>Nickname: Ari</div>
      <div>Gender: Female</div>
      <div>Top Books: 
        <div>Book1</div>
        <div>Book2</div>
        <input type="text"></input>
        <button>+</button>
      </div>
      <div>Top Genres: 
        <select>
          <option value="" selected></option>
          <option value="Thrillers">Thrillers</option>
          <option value="Business">Business</option>
          <option value="Romance">Romance</option>
        </select>
      </div>
      <div>Top Authors: 
        <div>Author1</div>
        <div>Author2</div>
        <input type="text"></input>
        <button>+</button>
      </div>
      <div>About me: 
        <div>Hello!!</div>
      </div>
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
});
