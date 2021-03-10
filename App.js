// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import firebase from 'firebase/app';
// import 'firebase/database';

// following tutorial from https://aboutreact.com/react-native-bottom-navigation/
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './Components/HomeScreen.js'
import UserScreen from './Components/UserScreen.js';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';
import SettingsScreen from './pages/SettingsScreen';

// instantiate Navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/* 
  schema
  - 2 tabs on our bottom nav: HomeTab, and UserTab
  - 2 stacks to supplement the tabs: HomeStack, and UserStack
*/
function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#4A69D9'},
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home Page'}} 
        username="Bill"
      /> 
      <Stack.Screen 
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details Page'}}/>
    </Stack.Navigator>
  );
}

// seems like more of a backend manifest. Tab Navigator is the frontend part
// of the navigation, but we send this info along to Settings bc the Settings
// page will need to navigate you to Details and Profiles if you click on
// the corresponding button while you're there
function UserStack() {
  return (
    <Stack.Navigator
      initialRouteName="User"
      screenOptions={{
        headerStyle: { backgroundColor: '#4A69D9' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="User"
        component={UserScreen}
        options={{ title: 'User Profile' }}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons 
                name="home"
                color={color}
                size={size}
              />
            ),
          }}  
        />
        <Tab.Screen
          name="UserStack"
          component={UserStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons 
                name="human"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

  // // Initialize Firebase
  // var firebaseConfig = {
  //   apiKey: "AIzaSyAYH0zqdMHO0mhj0ee_7_kZyIEtn7vaOHA",
  //   authDomain: "capstone-lilo.firebaseapp.com",
  //   databaseURL: "https://capstone-lilo-default-rtdb.firebaseio.com",
  //   projectId: "capstone-lilo",
  //   storageBucket: "capstone-lilo.appspot.com",
  //   messagingSenderId: "457024640739",
  //   appId: "1:457024640739:web:8e31884b8a6b002a8357d6",
  //   measurementId: "G-L2BJQKHLZP"
  // };

  // firebase.initializeApp(firebaseConfig);