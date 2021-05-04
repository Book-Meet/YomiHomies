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
import {NotifierWrapper, Notifier, Easing} from 'react-native-notifier'
// @ts-ignore
import { withAuthenticator} from 'aws-amplify-react-native';
import { AppState, Actions, ActionType, initialAppState, User } from './types'
import UserContext from './utils/userContext'
import { onCreateMatch } from './src/graphql/subscriptions';


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
      case ActionType.Search:
        console.log("changed search state");
        return {...state, reSearch: !state.reSearch}
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
      let user;
      let longitude, latitude
      try {
        [longitude, latitude]= await getLocation()
      } catch(e){
        longitude = 35;
        latitude = 140;
      }
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
        user = newProfile.data.createProfile;
        dispatch({type: ActionType.SetData, payload: user});
      }else { //should we add storage here to save the user's search radius?
        user = query.data.getProfile;
        user.latitude = latitude;
        user.longitude = longitude;
        dispatch({type: ActionType.SetData, payload: user});
      }
    })();
  }, [])

  useEffect(() => {
    if (state.user.id === '') return;
    const newMatchSub = API.graphql({query: onCreateMatch}).subscribe({
      next:(data) => {
        data = data.value.data.onCreateMatch;
        if (data.matcheeID === state.user.id) {
          let index = state.user.match.items.findIndex(match => 
            match.status=== "accepted" && match.matcheeID === data.matcherID);
          if (index > -1){
            Notifier.showNotification({
              title: 'New Match!',
              description: `You matched with ${data.matcherProfile.nickname}!`,
              duration: 4000,
              showAnimationDuration: 800,
              showEasing: Easing.bounce,
              hideOnPress: true,
              queueMode: 'standby'
            });
          } 
        }
      }
    })
    return () => newMatchSub.unsubscribe();
  }, [state.user])
  
  async function getLocation(){
    try{
      const {status} = await Location.requestPermissionsAsync()
      if (status!='granted'){
        console.log('YO WE NEED PERMISSION')
      }
      const {coords:{longitude, latitude}} = await Location.getCurrentPositionAsync();
      return [longitude, latitude]
    }catch (err){
      console.log(err)
    }
  }


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <SafeAreaProvider>
          <NotifierWrapper>
            <UserContext.Provider
              value={ contextValue }
              >
              <Navigation colorScheme={colorScheme}/>
              <StatusBar />
            </UserContext.Provider>
          </NotifierWrapper>
        </SafeAreaProvider>
      </>
    );
  }
}


export default withAuthenticator(App);
