import { Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabHomiesScreen from '../screens/TabHomiesScreen';
import TabHomeScreen from '../screens/TabHomeScreen';
import TabProfileScreen from '../screens/TabProfileScreen';
import TabSettingsScreen from '../screens/TabSettingsScreen';
import { BottomTabParamList, TabHomiesParamList, TabHomeParamList, 
  TabProfileParamList, TabSettingsParamList  } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Homies"
        component={TabHomiesNavigator}
        options={{
          tabBarIcon: ({ color }) => <OcticonIcons name="bookmark" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <OcticonIcons name="book" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={TabProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <OcticonIcons name="person" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={TabSettingsNavigator}
        options={{
          tabBarIcon: ({ color }) => <OcticonIcons name="settings" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/

function OcticonIcons(props: {name: React.ComponentProps<typeof Octicons>['name']; color: string}) {
  return <Octicons size={30} style={{marginBottom: -3}} {...props} />
}

const TabHomiesStack = createStackNavigator<TabHomiesParamList>()
function TabHomiesNavigator() {
  return (
    <TabHomiesStack.Navigator>
      <TabHomiesStack.Screen 
        name="TabHomiesScreen"
        component={TabHomiesScreen}
        options={{headerTitle: "Homies"}}
      />
    </TabHomiesStack.Navigator>
  )
}

const TabHomeStack = createStackNavigator<TabHomeParamList>()
function TabHomeNavigator() {
  return (
    <TabHomeStack.Navigator>
      <TabHomeStack.Screen 
        name="TabHomeScreen"
        component={TabHomeScreen}
        options={{headerTitle: "Home"}}
      />
    </TabHomeStack.Navigator>
  )
}

const TabProfileStack = createStackNavigator<TabProfileParamList>()
function TabProfileNavigator() {
  return (
    <TabProfileStack.Navigator>
      <TabProfileStack.Screen 
        name="TabProfileScreen"
        component={TabProfileScreen}
        options={{headerTitle: "Profile"}}
      />
    </TabProfileStack.Navigator>
  )
}

const TabSettingsStack = createStackNavigator<TabSettingsParamList>()
function TabSettingsNavigator() {
  return (
    <TabSettingsStack.Navigator>
      <TabSettingsStack.Screen 
        name="TabSettingsScreen"
        component={TabSettingsScreen}
        options={{headerTitle: "Settings"}}
      />
    </TabSettingsStack.Navigator>
  )
}
