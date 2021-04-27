import * as React from 'react';
import { useEffect, useState, useContext, useRef } from "react";
import { StyleSheet, Modal, Pressable } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {listProfiles} from '../src/graphql/queries';
import {createMatch, updateProfile} from '../src/graphql/mutations';
import UserContext from '../utils/userContext';
import { ActionType } from '../types';
import { Text, View } from '../components/Themed';
import API from '@aws-amplify/api';
import { checkMatch } from '../utils/customQueries';
import Colors from '../constants/Colors';
import {isPointWithinRadius} from 'geolib'


export default function TabHomeScreen()
{
  const { state, dispatch } = useContext(UserContext)
  const [matches, setMatches] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const swiperRef:any = useRef();
  
  const Card = ({ card, index }:any) =>
  {
    if(matches.length === 0) return null;
    if(card === undefined) return null;
    return (
      <View style={styles.card}>
        <View style={styles.profileContainer}>
          <Text style={styles.title}> {card.nickname}</Text>
          <View style={[{flexDirection: 'row'}, {alignContent: 'space-around', backgroundColor: 'transparent'}]}>
            <Text style={[styles.text, {margin: 10}, {borderBottomWidth: 1}]}>Username: <Text>{card.username}</Text></Text>
            <Text style={[styles.text, {margin: 10}, {borderBottomWidth: 1}]}>Gender: <Text>{card.gender}</Text></Text>
          </View>
          <View style={[styles.content, {backgroundColor: 'transparent'}]}>
            <Text style={styles.text}>Top Books: </Text>
              { card.books !== undefined ? card.books.items.map(book => {
              return (
                <Text key={book.id}>{book.title} - {book.author}</Text>
              )
              })
              : null
              }
            <Text style={styles.text}>Top Authors: </Text>
              { card.authors !== undefined ? card.authors.items.map(auth => {
              return (
                <Text key={auth.id}>{auth.name}</Text>
              )
              })
              : null
              }
            <Text style={styles.text}>About me: </Text>
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
            onPress={() => swiperRef.current.swipeLeft(index)}
          />
          <MaterialCommunityIcons.Button
            name='circle-outline'
            size={60}
            backgroundColor='transparent'
            underlayColor='transparent'
            activeOpacity={-0.3}
            color={Colors.pallete.blueNcs}
            onPress={() => swiperRef.current.swipeRight(index)}
          />
        </View>
      </View>
    );
  };


  const onSwipedLeft = async (index:Number) => {
    // update database
    let reject = await API.graphql({query:createMatch, variables:{input:{matcherID:state.user.id, matcheeID:matches[index].id, status:"rejected"}}})

    // update context
    let updatedUser = {...state.user}
    updatedUser.match.items.push(reject.data.createMatch);
    dispatch({type: ActionType.SetData, payload: updatedUser});
  }

  const onSwipedRight = async (index:Number) =>{
    // update database
    let accept = await API.graphql({query:createMatch, variables:{input: {matcherID:state.user.id, matcheeID:matches[index].id, status:"accepted", matchedOn: matches[0].book}} })

    // update context
    let updatedUser = {...state.user}
    updatedUser.match.items.push(accept.data.createMatch);
    dispatch({type: ActionType.SetData, payload: updatedUser});

    // check if it's a match
    let filter = { and: [{matcheeID: {eq: state.user.id }}, {matcherID: {eq: matches[index].id}}, {status: {eq: "accepted"}}]}
    let res = await API.graphql({query:checkMatch, variables: {filter: filter}})
    if (res.data.listMatchs.items.length > 0) {
      setModalVisible(true);
    }
  }

  async function updateUserLocation (){
    let now = Date.parse(new Date().toISOString())
    if (now - Date.parse(state.user.updatedAt) > 86400000){
      await API.graphql({query:updateProfile, variables:{input:{id:state.user.id, latitude:state.user.latitude, longitude:state.user.longitude}}});
    }
  }
  useEffect(() =>
  {
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
      if(state.user.searchRadius){
        profiles = profiles.filter(a=>isPointWithinRadius({latitude:a.latitude, longitude:a.longitude}, {latitude:state.user.latitude, longitude:state.user.longitude}, state.user.searchRadius* 1000))
      }
      setMatches(profiles);
      updateUserLocation();
    })()
  }, [state.user.id, state.reSearch])
  
  return (
    <View style={styles.container}>
      { matches.length > 0 ? <>
        <View style={styles.swiperContainer}>
          <Swiper
          ref={swiperRef}
          cards={matches}
          cardIndex={0}
          renderCard={(card, index) => <Card card={card} index={index} />}
          onSwipedLeft={(index) => onSwipedLeft(index)}
          onSwipedRight={(index) => onSwipedRight(index)}
          onSwipedAll={() => setMatches([])}
          stackSize={2}
          stackScale={10}
          stackSeparation={14}
          disableTopSwipe
          disableBottomSwipe
          inputRotationRange={[0, 0, 0]}
          outputRotationRange={["0deg", "0deg", "0deg"]}
          cardVerticalMargin={20}
          animateOverlayLabelsOpacity
          animateCardOpacity
          // infinite
          backgroundColor={'transparent'}
          overlayLabels={{
            left: {
              title: 'NOPE',
              style: {
                label: {
                  color: Colors.pallete.atomicTangerine,
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
                  color: Colors.pallete.lapisLazuli,
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
        <Modal
          animationType="slide"
          transparent={true}
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
      </>
      :
      (
        <Text style={styles.noMatch}>{`No more matches with current settings... \n\nTry changing your top books in your profile or editing your search preferences.`}</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  card: {
    flex: 0.8,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: Colors.pallete.apricot,
    padding: 20,
    borderColor: Colors.pallete.darkCornflowerBlue,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 20,
    shadowColor: Colors.pallete.darkCornflowerBlue,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.35,
    shadowRadius: 30,
  },
  // cardImage: {
  //   width: 160,
  //   flex: 1,
  //   resizeMode: 'contain'
  // },
  swiperContainer: {
    flex: 1,
  },
  profileContainer: {
    justifyContent: 'space-evenly',
    backgroundColor: Colors.pallete.apricot,
  },
  cardDetails: {
    alignItems: 'center'
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: Colors.pallete.apricot,
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'center',
  },
  content: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  text: {
    lineHeight: 20,
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  noMatch: {
    fontSize: 20,
    margin: 50,
  }
});