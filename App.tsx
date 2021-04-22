import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useContext, useReducer, useMemo} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Amplify, {API, graphqlOperation} from 'aws-amplify'; 
import config from './src/aws-exports'
import { getProfile} from './src/graphql/queries';
import {createProfile} from './src/graphql/mutations';
import { Auth } from "@aws-amplify/auth";
import * as Location from 'expo-location'
// @ts-ignore
import { withAuthenticator} from 'aws-amplify-react-native';
import { AppState, Actions, ActionType, initialAppState, User } from './types'
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

// set up for reducer methods
function reducer(state: AppState, action: Actions): AppState {
  switch (action.type) {
      case ActionType.SetData:
        return { ...state, user: action.payload }
      default:
        return state
  }
}

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  // use reducer declaration
  const [state, dispatch] = useReducer(reducer, initialAppState);

  const contextValue = useMemo(() => {
    return {state, dispatch}
  }, [state, dispatch]);

  useEffect(()=>{
    (async function () {
      let [latitude, longitude] = await getLocation()
      let currentUser = await Auth.currentUserInfo()
      const query:any = await API.graphql(graphqlOperation(getProfile, { id:currentUser.id  }));
      if(query.data.getProfile === null){
        let input = {
          id: currentUser.id,
          username: currentUser.username,
          latitude,
          longitude
        };
        const newProfile = await API.graphql(graphqlOperation(createProfile, { input }))
        let user = newProfile.data.createProfile;
        dispatch({type: ActionType.SetData, payload: user});
      }else {
        let user = query.data.getProfile;
        user.latitude = latitude;
        user.longitude = longitude;
        dispatch({type: ActionType.SetData, payload: user});
      }
    })()
  }, [])
  
  async function getLocation(){
    const {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted'){
      console.error('YO WE NEED YOUR LOCATION!');
      return;
    }
    const {coords:{longitude, latitude}} = await Location.getCurrentPositionAsync();
    return [latitude, longitude];
  }


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
