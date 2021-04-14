import * as React from 'react';
import { StyleSheet, Image, Button, TextInput, ScrollView } from 'react-native';
import { MultiselectDropdown } from 'sharingan-rn-modal-dropdown';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


export default function TabProfileScreen() {
  const sample = [
    {
      value: '1',
      label: 'Thrillers'
    },
    {
      value: '2',
      label: 'Business'
    },
    {
      value: '3',
      label: 'Romance'
    },
    {
      value: '4',
      label: 'Technology'
    },
    {
      value: '5',
      label: 'Comics'
    }
  ];
  const [count, setCount] = React.useState(0);
  const [valueMS, setValueMS] = React.useState<string[]>([]);
  const onChangeMS = (value: string[]) => {
    setValueMS(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Image style={{
            width: 100,
            height: 100
          }} source={require('../assets/images/arina-reading.jpeg')} />
      <Text>Username: Arina</Text>
      <Text>Nickname: Ari</Text>
      <Text>Gender: Female</Text>
      <Text>Top Books: </Text>
        <Text>Book1</Text>
        <Text>Book2</Text>
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
        <ScrollView style={styles.list}>
          <MultiselectDropdown
            label="Top Genres:"
            data={sample}
            chipType="outlined"
            value={valueMS}
            onChange={onChangeMS}
          />
        </ScrollView>
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
