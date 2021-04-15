import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              TabHomeScreen: 'Home',
            },
          },
          Profile: {
            screens: {
              TabProfileScreen: 'Profile',
            },
          },
          Homies: {
            screens: {
              TabHomiesScreen: 'Homies',
            },
          },
          Settings: {
            screens: {
              TabSettingsScreen: 'Settings',
            },
          }
        },
      },
      NotFound: '*',
    },
  },
};
