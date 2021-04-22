import * as React from 'react';
import { useEffect, useState, useContext } from "react";
import { StyleSheet, Image, StatusBar, SafeAreaView, Dimensions, Alert, Modal, Pressable, ImageBackground } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Transitioning, Transition } from 'react-native-reanimated'
import {listProfiles} from '../src/graphql/queries';
import {createMatch} from '../src/graphql/mutations';
import UserContext from '../utils/userContext';
import { ActionType } from '../types';
import { Text, View } from '../components/Themed';
import API from '@aws-amplify/api';
import { checkMatch } from '../utils/customQueries';
import { transform } from '@babel/core';

const { width } = Dimensions.get('window');

const colors = {
  red: '#ec2379',
  blue: '#0070ff',
  gray: '#777777',
  black: '#000000',
  white: '#ffffff'
};

const ANIMATION_DURATION = 200;

export default function TabHomeScreen()
{
  const { state, dispatch } = useContext(UserContext)
  const [matches, setMatches] = useState([]);
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
  
  const Card = ({ card }:any) =>
  {
    if(matches.length === 0) return null 
    return (
      <ImageBackground style={styles.imgBackground} resizeMode='cover' source={require("../assets/images/page_background.jpg")}>
      <View style={styles.card}>
        <Transitioning.View ref={transitionRef} transition={transition}>
          <CardDetails index={0} />
        </Transitioning.View>
        <View style={styles.bottomButtonsContainer}>
          <MaterialCommunityIcons.Button
            name='close'
            size={94}
            backgroundColor='transparent'
            underlayColor='transparent'
            activeOpacity={-0.3}
            color={colors.red}
            onPress={() => swiperRef.current.swipeLeft()}
          />
          <MaterialCommunityIcons.Button
            name='circle-outline'
            size={94}
            backgroundColor='transparent'
            underlayColor='transparent'
            activeOpacity={-0.3}
            color={colors.blue}
            onPress={() => swiperRef.current.swipeRight()}
          />
        </View>
      </View>
      </ImageBackground>
    );
  };
  
  const CardDetails = ({ index }:any) => matches.length > 0 ? (
    <View style={styles.cardDetails} key={matches[0].id}>
      <Text style={[styles.text, styles.name]}>{"Name: " + matches[0].username}</Text>
      <Text style={[styles.text, styles.book]}>{"Book: " + matches[0].book}</Text>
      <Text style={[styles.text, styles.name]}>{"About Me: " + matches[0].about_me}</Text>
    </View>
  ) : null;

  const onSwipedLeft = async () => {
    transitionRef.current.animateNextTransition();

    // update database
    let reject = await API.graphql({query:createMatch, variables:{input:{matcherID:state.user.id, matcheeID:matches[0].id, status:"rejected"}}})

    // update context
    let updatedUser = {...state.user}
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
    let updatedUser = {...state.user}
    updatedUser.match.items.push(accept.data.createMatch);
    dispatch({type: ActionType.SetData, payload: updatedUser});

    // update matches state
    let temp = [...matches];
    temp.splice(0, 1);
    setMatches(temp);

    // check if it's a match
    let filter = { and: [{matcheeID: {eq: state.user.id }}, {matcherID: {eq: matches[0].id}}, {status: {eq: "accepted"}}]}
    let res = await API.graphql({query:checkMatch, variables: {filter: filter}})
    if (res.data.listMatchs.items.length > 0) {
      setModalVisible(true);
    }
  }

  useEffect(() => {
    if (state.user.id == '') return;
    (async function fetchMatches (){
      let alreadySwiped = state.user.match.items.length > 0  
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
    })()
  }, [state])
  

  return (
    <View style={styles.container}>
      { modalVisible ? (
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>You got a match!</Text>
            <Pressable
              style={[styles.button,]}
              onPress={() => setModalVisible(false)}
            >
              <Text>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      ) 
      : (<> 
      {/* <StatusBar hidden /> */}
      {/* <MaterialCommunityIcons
        name='crop-square'
        size={width}
        color={colors.blue}
        style={styles.diamondIcon}
      /> */}
      <View style={styles.swiperContainer}>
        <Swiper
        ref={swiperRef}
        cards={matches}
        cardIndex={0}
        renderCard={(card) => <Card card={card} />}
        onSwipedLeft={onSwipedLeft}
        onSwipedRight={onSwipedRight}
        stackSize={4}
        stackScale={10}
        stackSeparation={14}
        disableTopSwipe
        disableBottomSwipe
        animateOverlayLabelsOpacity
        animateCardOpacity
        infinite
        backgroundColor={'transparent'}
        overlayLabels={{
          left: {
            title: 'NOPE',
            style: {
              label: {
                // backgroudColor: colors.red,
                color: colors.white,
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
                // backgroudColor: colors.blue,
                color: colors.white,
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
        </View>
      </>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    height: "100%",
    width: "100%",
  },
  card: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: 'transparent',
    // shadowRadius: 25,
    // shadowColor: colors.black,
    // shadowOpacity: 0.08,
    // shadowOffset: { width: 0, height: 0 },
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: 160,
    flex: 1,
    resizeMode: 'contain'
  },
  swiperContainer: {
    flex: 1
  },
  // bottomContainer: {
  //   flex: 0.45,
  //   justifyContent: 'space-evenly'
  // },
  // cardDetails: {
  //   alignItems: 'center'
  // },
  text: {
    // fontFamily: 'Courier'
  },
  name: {
    fontSize: 24, marginBottom: 10, color: colors.gray
  },
  book: {
    color: colors.blue, fontSize: 25, fontWeight: '500'
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  diamondIcon: {
    opacity: 0.05,
    position: 'absolute',
    top: 30,
    left: -20
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 75
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
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1
  }
});