import * as React from 'react';
import { useEffect, useState, useContext } from "react";
import { StyleSheet, Image, StatusBar, SafeAreaView, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Transitioning, Transition } from 'react-native-reanimated'
import {listProfiles, listBooks, getProfile, listMatchs} from '../src/graphql/queries';
import {createMatch, updateMatch} from '../src/graphql/mutations';
import {Auth} from 'aws-amplify';
import UserContext from '../utils/userContext';


// import TinderCard from "react-tinder-card";
// import { shouldUseActivityState } from 'react-native-screens';
// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import API, { graphqlOperation } from '@aws-amplify/api';
import { updateProfile } from '../src/graphql/mutations';

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
  const [index, setIndex] = useState(0);
  const { state, dispatch } = useContext(UserContext)
  const [matches, setMatches] = useState([]);
  const [allMatches, setAllMatches] = useState([]);

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
      <View style={styles.card}>
        <Image source={{uri:"https://i.ibb.co/f8vR1P8/ace.jpg"}} style={styles.cardImage} />
      </View>
    );
  };
  
  const CardDetails = ({ index }:any) => matches.length > 0 ? (
    <View style={styles.cardDetails} key={matches[index].id}>
      <Text style={[styles.text, styles.name]}>{"Name: " + matches[index].username}</Text>
      <Text style={[styles.text, styles.book]}>{"Book: " + matches[index].book}</Text>
      <Text style={[styles.text, styles.name]}>{"ABout Me: " + matches[index].about_me}</Text>
    </View>
  ) : null;

  const onSwipedLeft = async () => {
    transitionRef.current.animateNextTransition();
    let reject = await API.graphql({query:createMatch, variables:{input:{matcherID:state.user.id, matcheeID:matches[index].id, status:"rejected"}}})
    let temp = [...matches];
    temp.splice(index, 1);
    setMatches(temp);
    setIndex((index + 1) % matches.length);
  }
  
  const onSwipedRight = async () =>{
    transitionRef.current.animateNextTransition();
    let status = '';
    matches[0].matchReq.items.status === 'pending' ? status = 'accepted': "pending";
    let addMatch = await API.graphql({query:createMatch, variables:{input: {matcherID:state.user.id, matcheeID:matches[index].id, status}} })
    let temp = [...matches];
    temp.splice(index, 1);
    setMatches(temp);
    setIndex((index + 1) % matches.length);
  }

  useEffect(() => {
    if (state.user.id == '') return;
    (async function fetchProfiles (){
      let myMatches = await API.graphql({query:listMatchs, variables:{matcherID:state.user.id}});
      setAllMatches(myMatches.data.listMatchs.items);
      let profiles:any = await API.graphql({query:listProfiles});
      profiles = profiles.data.listProfiles.items;
      profiles = profiles.filter((a:any)=>{
        let books = a.books.items;
        for (let match of a.matchRes.items){
          if (match.matcherID == state.user.id) return false;
        }
        for (let book of state.user.books.items){
          if(books.some((b:any)=>b.title === book.title)) {
            a.book = book.title;
            return a.id !== state.user.id;
          }
        }
        return false
      })
      setMatches(profiles);
    })()
  }, [state])
  

  return (
    <View style={styles.container}>
      {/* <StatusBar hidden /> */}
      <MaterialCommunityIcons
        name='crop-square'
        size={width}
        color={colors.blue}
        style={styles.diamondIcon}
      />
      <View style={styles.swiperContainer}>
        <Swiper
        ref={swiperRef}
        cards={matches}
        cardIndex={index}
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
      <View style={styles.bottomContainer}>
        <Transitioning.View ref={transitionRef} transition={transition}>
          <CardDetails index={index} />
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
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  card: {
    flex: 0.45,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: colors.black,
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  cardImage: {
    width: 160,
    flex: 1,
    resizeMode: 'contain'
  },
  swiperContainer: {
    flex: 0.55
  },
  bottomContainer: {
    flex: 0.45,
    justifyContent: 'space-evenly'
  },
  cardDetails: {
    alignItems: 'center'
  },
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
  }
});

// export default function TabHomeScreen()
// {
//   const [people, setPeople] = useState([
//     {
//         name: 'ace',
//         uri : 'https://i.ibb.co/VqscmSr/ace.jpg'
//     },
//     {
//       name : 'chopper',
//       uri : 'https://i.ibb.co/82GDRYs/chopper.jpg'
//     },
//     {
//       name : 'doflamingo',
//       uri : 'https://i.ibb.co/NtM1Nt8/doflamingo.jpg'
//     },
//     {
//       name : 'franky',
//       uri : 'https://i.ibb.co/9nvgyNd/franky.jpg'
//     },
//     {
//       name : 'luffy',
//       uri : 'https://i.ibb.co/10XxfkX/luffy.jpg'
//     },
//     {
//       name : 'sanji',
//       uri : 'https://i.ibb.co/mD7kyVz/sanji.jpg'
//     },
//     {
//       name : 'shanks',
//       uri : 'https://i.ibb.co/J5kSTKJ/shanks.jpg'
//     },
//     {
//       name : 'smoker',
//       uri : 'https://i.ibb.co/0cCGDrR/smoker.jpg'
//     },
//     {
//       name : 'usopp',
//       uri : 'https://i.ibb.co/48LBJjn/usopp.jpg'
//     },
//     {
//       name : 'zoro',
//       uri : 'https://i.ibb.co/j8ZR1m3/zoro.jpg'
//     },
    
// ]);
//   return (
//     <View >
//       <View style={styles.container}>
//         {
//           people.map((person) =>
//             <TinderCard
//               preventSwipe={['up', 'down']}
//             >
//               <Image source={{ uri: person.uri }} style={{width: 400, height: 400}}
//               />
//               <Text style={styles.name}>{person.name}</Text>
//             </TinderCard>
//           )
//         }
//         </View>
//       <Text style={styles.title}>Matching</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   tinderCards__cardContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: 5,
//   },
//   card: {
//     position: 'relative',
//     marginTop: 10,
//     width: 600,
//     padding: 20,
//     height: 600,
//     borderRadius: 20,
//   },
//   swipe: {
//     position: "absolute",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   name: {
//     fontSize: 30,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });


// container: {
//   flex: 1,
//   alignItems: 'center',
//   justifyContent: 'center',
// },

// separator: {
//   marginVertical: 30,
//   height: 1,
//   width: '80%',
// },