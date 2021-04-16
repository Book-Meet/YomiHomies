import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useContext, useReducer, useMemo} from 'react';
//import { UserContext } from './userContext_state_config'
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
import { AppState, Actions, ActionType, initialAppState } from './types'
import UserContext from './utils/userContext'


// Amplify.configure(config) //this was the original config import 
// issue was given a solution here https://github.com/aws-amplify/amplify-js/issues/5918
//aws amplify throws an error when analytics isn't disabled
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

function reducer(state: AppState, action: Actions): AppState {
  switch (action.type) {
      case ActionType.LoadData:
          return { ...state, user: action.payload }
      default:
          return state
  }
}

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [state, dispatch] = useReducer(reducer, initialAppState);
  // let user:any = {};

  const contextValue = useMemo(() => {
    return {state, dispatch}
}, [state, dispatch]);

  useEffect(()=>{
    (async function () {
      let currentUser = await Auth.currentUserInfo()
      const query:any = await API.graphql(graphqlOperation(getProfile, { id:currentUser.id  }));
      if(query.data.getProfile === null){
        let input = {
          id: currentUser.id,
          username: currentUser.username
        };
        console.log('no Profile')
        const newProfile = await API.graphql(graphqlOperation(createProfile, { input }))
        // user = newProfile.data.createProfile;
      }else {
        // user = query.data.getProfile;  
      }
    })()
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <SafeAreaProvider>
          <UserContext.Provider
            value={ contextValue }
          >
            <Navigation colorScheme={colorScheme}/>
            <StatusBar />
          </UserContext.Provider>
        </SafeAreaProvider>
      </>
    );
  }
}


export default withAuthenticator(App);
