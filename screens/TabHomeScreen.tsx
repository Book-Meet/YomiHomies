import * as React from 'react';
import { useEffect, useState, useContext } from "react";
import { StyleSheet, Image, StatusBar, SafeAreaView, Dimensions, Alert, Modal, Pressable, ImageBackground } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Transitioning, Transition } from 'react-native-reanimated'
import {listMatchs, listProfiles} from '../src/graphql/queries';
import {createMatch, updateProfile} from '../src/graphql/mutations';
import UserContext from '../utils/userContext';
import { ActionType, User } from '../types';
import { Text, View } from '../components/Themed';
import API from '@aws-amplify/api';
import { checkMatch } from '../utils/customQueries';
import { transform } from '@babel/core';
import * as Location from 'expo-location';
import Colors from '../constants/Colors'

const { height, width } = Dimensions.get('window');
const ANIMATION_DURATION = 200;

export default function TabHomeScreen()
{
  const { state, dispatch } = useContext(UserContext)
  const [matches, setMatches]:any = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const transition = (
    <Transition.Sequence>
      <Transition.Out type='slide-bottom' durationMs={ANIMATION_DURATION} interpolation='easeIn'/>
      <Transition.Together>
        <Transition.In type='fade' durationMs={ANIMATION_DURATION} delayMs={ANIMATION_DURATION / 2}/>
        <Transition.In type='slide-bottom' durationMs={ANIMATION_DURATION} delayMs={ANIMATION_DURATION / 2} interpolation='easeOut'/>
      </Transition.Together>
    </Transition.Sequence>
  );

  const swiperRef:any = React.createRef();
  const transitionRef:any = React.createRef();
  
  const showCard = (card:any, index:Number) =>
  {
    if (card.username === undefined) return null;
    if (matches.length === 0) return null; 
    return (
        <View style={styles.card}>
          <Transitioning.View ref={transitionRef} transition={transition}>
          <View style={styles.cardDetails} key={index}>
            <Text style={styles.title}>{card.username}</Text>

              <View style={[{flexDirection: 'row'}, {alignContent: 'space-around'}]}>
                <Text style={[{margin: 10}, {borderBottomWidth: 1}]}>Nickname: <Text>{card.nickname}</Text></Text>
                <Text style={[{margin: 10}, {borderBottomWidth: 1}]}>Gender: <Text>{card.gender}</Text></Text>
              </View>
              <View >
                <Text >Top Books: </Text>
                  { card.books !== undefined ? card.books.items.map(book => {
                  return (
                    <Text key={book.id}>{book.title} - {book.author}</Text>
                  )
                  })
                  : null
                  }
              
                {/* <Text >Top Authors: </Text>
                  { card.authors !== undefined ? card.authors.items.map(auth => {
                  return (
                    <Text key={auth.id}>{auth.name}</Text>
                  )
                  })
                  : null
                  } */}
                <Text>About me: </Text>
                <Text>{card.about_me}</Text>
              </View>
          </View>
          <View style={styles.bottomButtonsContainer}>
            <MaterialCommunityIcons.Button
              name='close'
              size={60}
              backgroundColor='transparent'
              underlayColor='transparent'
              activeOpacity={-0.3}
              color={Colors.pallete.atomicTangerine}
              onPress={() => swiperRef.current.swipeLeft()}
            />
            <MaterialCommunityIcons.Button
              name='circle-outline'
              size={60}
              backgroundColor='transparent'
              underlayColor='transparent'
              activeOpacity={-0.3}
              color={Colors.pallete.lapisLazuli}
              onPress={() => swiperRef.current.swipeRight()}
            />
          </View>
          </Transitioning.View>
        </View>
    );
  };


  const onSwipedLeft = async () => {
    transitionRef.current.animateNextTransition();

    // update database
    let reject:any = await API.graphql({query:createMatch, variables:{input:{matcherID:state.user.id, matcheeID:matches[0].id, status:"rejected"}}})

    // update context
    let updatedUser:any = {...state.user}
    updatedUser.match.items.push(reject.data.createMatch);
    dispatch({type: ActionType.SetData, payload: updatedUser});

    // update matches state
    let temp = [...matches];
    temp.splice(0, 1);
    setMatches(temp);
  }
  
  const onSwipedRight = async () =>{
    transitionRef.current.animateNextTransition();

    // update database
    let accept = await API.graphql({query:createMatch, variables:{input: {matcherID:state.user.id, matcheeID:matches[0].id, status:"accepted", matchedOn: matches[0].book}} })
    
    // update context
    let updatedUser:any = {...state.user}
    updatedUser.match.items.push(accept.data.createMatch);
    dispatch({type: ActionType.SetData, payload: updatedUser});

    // update matches state
    let temp = [...matches];
    temp.splice(0, 1);
    setMatches(temp);

    // check if it's a match
    let filter = { and: [{matcheeID: {eq: state.user.id }}, {matcherID: {eq: matches[0].id}}, {status: {eq: "accepted"}}]}
    let res:any = await API.graphql({query:checkMatch, variables: {filter: filter}})
    if (res.data.listMatchs.items.length > 0) {
      setModalVisible(true);
    }
  }

  async function updateUserLocation (){
    let now = Date.parse(new Date().toISOString())
    if (now - Date.parse(state.user.updatedAt) > 86400000){
      await API.graphql({query:updateProfile, variables:{id:state.user.id, latitude:state.user.latitude, longitude:state.user.longitude}});
    }
  }

  // useEffect(() => {
  //   (async function  (){
  //     const profiles = await API.graphql(graphqlOperation(listProfiles));
  //     const eachProfile = profiles.data.listProfiles.items
  //     // console.log(eachProfile);
  //     // console.log(eachProfile.length)
  //     // console.log(typeof eachProfile)
  //     // eachProfile.map((val) =>
  //     // {
  //     //   console.log(val._version)
  //     // })
  //     setImage(eachProfile)
  //   })()
  // }, [])
  useEffect(() =>
  {
    console.log("state is:",state)
    if (state.user.id == '') return;
    (async function fetchMatches (){
      console.log("fetching matches");
      let alreadySwiped:any = state.user.match.items.length > 0  
        ? state.user.match.items.map(match => match.matcheeID)
        : [];
      let profiles:any = await API.graphql({query:listProfiles, variables: {filter: {not: {id: {eq: state.user.id}}}}});
      profiles = profiles.data.listProfiles.items;
      profiles = profiles.filter(profile => {
        if (alreadySwiped.includes(profile.id)) return false;
        // filter on books
        if (state.user.books.items.length === 0) return false;
        return state.user.books.items.some(a => {
          if (profile.books.items.length > 0) {
            for (let book of profile.books.items){
              if (book.title === a.title) {
                profile.book = book.title;
                return true;
              };
            }
          }
          return false;
        })
      })
      setMatches(profiles);
      updateUserLocation();
    })()
  }, [state.user.id, state.reSearch])
  

// DOM
  return (
    <SafeAreaView style={styles.container}>
      { modalVisible ? (
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>You got a match!</Text>
          <Pressable
            style={[styles.button,]}
            onPress={() => setModalVisible(false)}
          >
            <Text>Hide Modal</Text>
          </Pressable>
        </View>
      </Modal>
      ) 
      : (<> 
      {/* <StatusBar hidden /> */}
      <SafeAreaView style={styles.swiperContainer}>
        {matches.length > 0 ? 
          <Swiper
          ref={swiperRef}
          cards={matches}
          cardIndex={0}
          renderCard={showCard}
          onSwipedLeft={onSwipedLeft}
          onSwipedRight={onSwipedRight}
          onSwipedAll={() => {console.log('SwipedAll')}}
          cardHorizontalMargin= {0}
          cardVerticalMargin={0}
          stackSize={1}
          stackScale={0}
          stackSeparation={0}
          inputRotationRange={[0, 0, 0]}
          outputRotationRange={["0deg", "0deg", "0deg"]}
          disableTopSwipe
          disableBottomSwipe
          animateOverlayLabelsOpacity
          animateCardOpacity      
          overlayLabels={{
            left: {
              title: 'NOPE',
              style: {
                label: {
                  color: Colors.pallete.white,
                  fontSize: 24
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: -20
                }
              }
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  color: Colors.pallete.white,
                  fontSize: 24
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 20
                }
              }
            }
          }}
          />
          : null}
        </SafeAreaView>
      </>)}
    </SafeAreaView>
  );
}

// define styles(CSS)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pallete.linen,
    alignItems: 'flex-start'
  },
  card: {
    flex: 0.8,
    width: "100%",
    backgroundColor: Colors.pallete.linen,
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: Colors.pallete.darkCornflowerBlue,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 10
  },
  swiperContainer: {
    flex: 1,
    justifyContent: "center",
  },
  cardDetails: {
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    padding: 5,
  },
  name: {
    fontSize: 30, marginBottom: 10, color: "black", alignSelf: 'center'
  },
  book: {
    color: "black", fontSize: 25, //fontWeight: '500', 
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 100,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#333",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
