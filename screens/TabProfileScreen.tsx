import {useEffect, useState} from 'react';
import * as React from 'react';
import { StyleSheet, Image, Button, TextInput } from 'react-native';
// import { StyleSheet, Image, Button, TextInput, StatusBar, SafeAreaView} from 'react-native';
// import RNMultiSelect, { IMultiSelectDataTypes } from "@freakycoder/react-native-multiple-select";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { getProfile, listProfiles } from '../src/graphql/queries';
import Amplify, {API, graphqlOperation} from 'aws-amplify'; 
import { Auth } from "@aws-amplify/auth";
import AWSAppSyncClient from 'aws-appsync';
import config from '../src/aws-exports';


export default function TabProfileScreen() {
  // const [genre, setGenre] = React.useState([
  //   {
  //     key: '1',
  //     label: 'Thrillers'
  //   },
  //   {
  //     key: '2',
  //     label: 'Business'
  //   },
  //   {
  //     key: '3',
  //     label: 'Romance'
  //   },
  //   {
  //     key: '4',
  //     label: 'Technology'
  //   },
  //   {
  //     key: '5',
  //     label: 'Comics'
  //   }
  // ]);
  // const staticData: Array<IMultiSelectDataTypes> = [
  //   {
  //     id: 0,
  //     value: 'Thrillers',
  //     isChecked: false,
  //   },
  //   {
  //     id: 1,
  //     value: 'Business',
  //     isChecked: false,
  //   },
  //   {
  //     id: 2,
  //     value: 'Romance',
  //     isChecked: false,
  //   },
  //   {
  //     id: 3,
  //     value: 'Technology',
  //     isChecked: false,
  //   },
  //   {
  //     id: 4,
  //     value: 'Comics',
  //     isChecked: false,
  //   }
  // ];
  
  // const [selectedItems, setSelectedItems] = React.useState<string[]>([]);
  // const onSelectedItemsChange = (value: string[]) => {
  //   setSelectedItems(value);
  // };

  // const [dynamicData, setDynamicData] = React.useState<
  //   Array<IMultiSelectDataTypes>
  // >([]);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setDynamicData(staticData);
  //   }, 2000);
  // }, []);

  const [count, setCount] = useState(0);
  const [user, setUser] = useState({});
  
  // const client = new AWSAppSyncClient({
  //   url: config.aws_appsync_graphqlEndpoint,
  //   region: config.aws_appsync_region,
  //   auth: {
  //     type: 'API_KEY',
  //     apiKey: config.aws_appsync_apiKey
  //   }
  // });

  useEffect(()=>{
    (async () =>{
      let authUser = await Auth.currentUserInfo()
      let temp:any = await API.graphql(graphqlOperation(getProfile,{id:authUser.id}));
      temp = temp.data.getProfile;
      setUser (temp);
      // await client.mutate({query: })
    })()
  }, [])
  
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
        <Text>Book2</Text>
        <Text>Book3</Text>
        <TextInput style={styles.input}/>
        <Button
          onPress={() => setCount(count + 1)}
          title="+"
        />
      
      <Text>Top Genres: </Text>
        <Text>Genre1</Text>
        <Text>Genre2</Text>
        <Text>Genre3</Text>
        
        {/* <select>
          <option value="" selected></option>
          <option value="Thrillers">Thrillers</option>
          <option value="Business">Business</option>
          <option value="Romance">Romance</option>
        </select> */}
      <Text>Top Authors: </Text>
        <Text>Author1</Text>
        <Text>Author2</Text>
        <Text>Author3</Text>
        <TextInput style={styles.input}/>
        <Button
          onPress={() => setCount(count + 1)}
          title="+"
        />
      <Text>About me: </Text>
        <Text>Hello!!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />

      {/* <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View
          style={{
            shadowRadius: 8,
            shadowOpacity: 0.3,
            shadowColor: "#757575",
            shadowOffset: {
              width: 0,
              height: 3,
            },
          }}
        >
          <RNMultiSelect
            disableAbsolute
            // fillColor="red"
            data={dynamicData}
            onSelect={(selectedItems) =>
              console.log("SelectedItems: ", selectedItems)
            }
          />
        </View>
      </SafeAreaView> */}
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
