import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Amplify, {API, graphqlOperation} from 'aws-amplify'; 
import config from './src/aws-exports'
import { getProfile, listProfiles } from './src/graphql/queries';
import {createProfile} from './src/graphql/mutations';
import { Auth } from "@aws-amplify/auth";
// @ts-ignore
import { withAuthenticator} from 'aws-amplify-react-native';


// Amplify.configure(config) //this was the original config import 
// issue was given a solution here https://github.com/aws-amplify/amplify-js/issues/5918
//aws amplify throws an error when analytics isn't disabled
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(()=>{
    (async function () {
      let currentUser = await Auth.currentUserInfo()
      console.log(currentUser);
      const query = await API.graphql(graphqlOperation(getProfile, { id:currentUser.id  }));
      console.log(query.data);
      if(query.data.getProfile === null){
        let input = {
          id: currentUser.id,
          username: currentUser.username
        };
        console.log('no Profile')
        const newProfile = await API.graphql(graphqlOperation(createProfile, { input }))
      }  
      // const query2 = await API.graphql(graphqlOperation(getProfile, { id: currentUser.id }));
      // console.log(query2);
    })()
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </>
    );
  }
}


export default withAuthenticator(App);
