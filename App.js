// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { StyleSheet, Text, View } from 'react-native';

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

import HomeScreen from './pages/HomeScreen';
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
        headerStyle: { backgroundColor: '#42f44b'},
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home Page'}} 
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
function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Settings Page' }}/>
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details Page' }}/>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile Page' }}/>
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
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons 
                name="settings"
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
