import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Amplify from 'aws-amplify'; 
import { API, graphqlOperation } from 'aws-amplify'
import config from './src/aws-exports'
import { listTodos } from './src/graphql/queries';
import { Auth } from "@aws-amplify/auth";
import { withAuthenticator, AmplifySignOut } from 'aws-amplify-react-native';


Amplify.configure(config)

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  (async function () {
    const todos = await API.graphql(graphqlOperation(listTodos));
    console.log('todos are :', todos);
    // Auth.signOut();
  })()

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
      {/* <div>
        <AmplifySignOut />
        My App
        </div> */}
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
      </>
    );
  }
}


export default withAuthenticator(App);
