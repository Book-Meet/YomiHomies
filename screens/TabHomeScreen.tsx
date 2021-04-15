import * as React from 'react';
import { useEffect, useState } from "react";
import { StyleSheet, Image } from 'react-native';
import TinderCard from "react-tinder-card";
// import { shouldUseActivityState } from 'react-native-screens';
// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabHomeScreen()
{
  const [people, setPeople] = useState([
    {
        name: 'tester1',
        uri : 'https://i.ibb.co/VqscmSr/ace.jpg'
    },
    {
      name : 'tester2',
      uri : 'https://i.ibb.co/82GDRYs/chopper.jpg'
    },
    {
      name : 'tester3',
      uri : 'https://i.ibb.co/NtM1Nt8/doflamingo.jpg'
    },
    {
      name : 'tester4',
      uri : 'https://i.ibb.co/9nvgyNd/franky.jpg'
    },
    {
      name : 'tester5',
      uri : 'https://i.ibb.co/10XxfkX/luffy.jpg'
    },
    {
      name : 'tester6',
      uri : 'https://i.ibb.co/mD7kyVz/sanji.jpg'
    },
    {
      name : 'tester7',
      uri : 'https://i.ibb.co/J5kSTKJ/shanks.jpg'
    },
    {
      name : 'tester8',
      uri : 'https://i.ibb.co/0cCGDrR/smoker.jpg'
    },
    {
      name : 'tester9',
      uri : 'https://i.ibb.co/48LBJjn/usopp.jpg'
    },
    {
      name : 'tester10',
      uri : 'https://i.ibb.co/j8ZR1m3/zoro.jpg'
    },
    
]);
  return (
    <View style={styles.container}>
      <View >
        {
          people.map((person) =>
            <TinderCard
              preventSwipe={['up', 'down']}
            >
              <Text >{person.name}</Text>
              <Image style={{
                width: 400, height: 400
              }} source={{ uri: person.uri }}
              />
            </TinderCard>
          )
        }
        </View>
      <Text style={styles.title}>Matching</Text>
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