import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Amplify, {API, graphqlOperation} from 'aws-amplify'; 
import config from './src/aws-exports'
import { listTodos } from './src/graphql/queries';
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

  (async function () {
    const todos = await API.graphql(graphqlOperation(listTodos));
    console.log('todos are :', todos);
  })()

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
