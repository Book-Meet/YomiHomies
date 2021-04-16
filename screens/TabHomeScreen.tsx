import * as React from 'react';
import { useEffect, useState } from "react";
import { StyleSheet, Image, StatusBar, SafeAreaView, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Transitioning, Transition } from 'react-native-reanimated'
import {listProfiles} from '../src/graphql/queries';

// import TinderCard from "react-tinder-card";
// import { shouldUseActivityState } from 'react-native-screens';
// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import API, { graphqlOperation } from '@aws-amplify/api';

const data = [
      {
        id: 1,
        name: 'Ace',
        book: 'Harry Potter',
        uri : 'https://i.ibb.co/f8vR1P8/ace.jpg'
      },
      { id: 2,
        name: 'Chopper',
        book: 'Adventures of Sherlock Holmes',
        uri : 'https://i.ibb.co/dWHxXnH/chopper.jpg'
      },
      {
        id: 3,
        name: 'Doflamingo',
        book: "Kiki's Delivery Service",
        uri: 'https://i.ibb.co/71N3h5W/doflamingo.jpg'
      },
      {
        id: 4,
        name: 'Franky',
        book: 'Dragon Ball',
        uri : 'https://i.ibb.co/6ZCYYqD/franky.jpg'
      },
      {
        id: 5,
        name: 'Luffy',
        book: 'One Piece',
        uri : 'https://i.ibb.co/HpR5T5p/luffy.jpg'
      },
      {
        id: 6,
        name: 'Sanji',
        book: 'Naruto',
        uri : 'https://i.ibb.co/m4M41Rq/sanji.jpg'
      },
      {
        id: 7,
        name: 'Shanks',
        book: 'Demon Slayer',
        uri : 'https://i.ibb.co/p25G6p4/shanks.jpg'
      },
      {
        id: 8,
        name: 'Smoker',
        book: 'Attack on Titan',
        uri : 'https://i.ibb.co/w6sqvDN/smoker.jpg'
      },
      {
        id: 9,
        name: 'Usopp',
        book: 'Pokemon',
        uri : 'https://i.ibb.co/xFrRSY0/usopp.jpg'
      },
      {
        id: 10,
        name: 'Zoro',
        book: 'Detective Conan',
        uri : 'https://i.ibb.co/7QsgXy1/zoro.jpg'
      },
]

const { width } = Dimensions.get('window');

// const stackSize = 4;

const colors = {
  red: '#ec2379',
  blue: '#0070ff',
  gray: '#777777',
  black: '#000000',
  white: '#ffffff'
};

const ANIMATION_DURATION = 200;

const transition = (
  <Transition.Sequence>
    <Transition.Out type='slide-bottom' durationMs={ANIMATION_DURATION} interpolation='easeIn'/>
    <Transition.Together>
      <Transition.In type='fade' durationMs={ANIMATION_DURATION} delayMs={ANIMATION_DURATION / 2}/>
      <Transition.In type='slide-bottom' durationMs={ANIMATION_DURATION} delayMs={ANIMATION_DURATION / 2} interpolation='easeOut'/>
    </Transition.Together>
  </Transition.Sequence>
);

const swiperRef = React.createRef();
const transitionRef = React.createRef();

const Card = ({ card }) =>
{
  return (
    <View style={styles.card}>
      <Image source={{ uri: card.uri }} style={styles.cardImage} />
    </View>
  );
};

const CardDetails = ({ index }) => (
  <View style={styles.cardDetails} key={data[index].id}>
    <Text style={[styles.text, styles.name]}>{"Name: " + data[index].name}</Text>
    <Text style={[styles.text, styles.book]}>{"Book: " + data[index].book}</Text>
  </View>
);


export default function TabHomeScreen()
{
  const [index, setIndex] = React.useState(0);
  const onSwiped = () =>
  {
    transitionRef.current.animateNextTransition();
    setIndex((index + 1) % data.length);
  };

  useEffect(() => {
    (async function fetchProfiles (){
      const profiles = await API.graphql(graphqlOperation(listProfiles));
      console.log(profiles.data.listProfiles.items);
    })()
  }, [])
  

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
        cards={data}
        cardIndex={index}
        renderCard={(card) => <Card card={card} />}
        onSwiped={onSwiped}
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
                backgroudColor: colors.red,
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
                backgroudColor: colors.blue,
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