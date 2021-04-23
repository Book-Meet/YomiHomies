import * as React from 'react';
import { StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import { Text, View } from '../components/Themed'
import  ChatListItem  from '../components/ChatListItem/index';
import chatRooms from '../data/ChatRooms';

export default function TabHomiesScreen() 
{
  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});




// // for save

// import * as React from 'react';
// import {useState, useEffect, useContext} from 'react';
// import { StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
// import {Text, View} from '../components/Themed'
// import Colors from '../constants/Colors';
// import { navItem } from '@aws-amplify/ui';
// import API from '@aws-amplify/api';
// import UserContext from '../utils/userContext';
// import {listBooks, listMatchs} from'../src/graphql/queries'



// export default function TabHomiesScreen() {

//   const {state, dispatch} = useContext(UserContext);
//   const [matches, setMatches] = useState([]);

//   useEffect(() => {
//     if(state.user.id === '') return
//     (async function() {
//       let filter = { and: [{matcheeID: {eq: state.user.id }}, {status: {eq: "accepted"}}]}
//       let myMatchers = await API.graphql({query:listMatchs, variables: {filter: filter}});
//       myMatchers = myMatchers.data.listMatchs.items;
//       let myMatchees = state.user.match.items.filter(a => a.status === 'accepted').map(a => a.matcheeID);
//       let matches = myMatchers.filter(a => myMatchees.includes(a.matcherID)).map(a=>a.matcherProfile);
//       setMatches(matches)
//     })()
//   }, [state])


//   const renderItem = ({item}:any) => {
//     if (state.user.id ==='') return null;
//     // console.log(item);
//     return (
//       <View style={styles.item}>
//         <Image style={styles.icons} source={{uri:"https://i.ibb.co/f8vR1P8/ace.jpg"}} />
//         <Text style={styles.nickname}>{"Name: " + item.username}</Text>
//         <Text>{"Gender: " + item.gender}</Text>
//         {/* <Text>{"Books: " + item.books}</Text> */}
//         <Text>{"About Me: " + item.about_me}</Text>
//         {/* <Text style={styles.chatPreview}>{item.chatPreview}</Text> */}
//       </View>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       { matches.length !== 0 ? (
//         <>
//           <FlatList
//             data={matches}
//             renderItem={renderItem}
//             keyExtractor={item=>item.id}
//           />
//         </>
//       ) :
//         <Text>No Matches, yet...</Text>
//       }
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%'
//   },
//   nickname: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   item: {
//     padding: 20,
//     marginVertical: 0,
//     marginHorizontal: 0,
//     borderRadius: 8,
//     borderColor: '#333333',
//     borderStyle: 'solid',
//     borderWidth: 1,
//     width: '100%'
//   },
//   chatPreview: {
//     fontSize: 10,
//     overflow: 'visible',
//   },
//   icons: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//     margin: 10,
//   }
// });