// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import firebase from 'firebase/app';
// import 'firebase/database';
import store from './store';
import {Provider} from 'react-redux';

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

import HomeScreen from './Components/HomeScreen.js';
import UserScreen from './Components/UserScreen.js';
import CallScreen from './Components/CallScreen';
import DetailsScreen from './pages/DetailsScreen'; // take out in mvp

// Welcome 
import WelcomeScreen from './Components/RequestorSignUp/WelcomeScreen';

// Requestor sign up 
import SelectLanguageScreen from './Components/RequestorSignUp/SelectLanguageScreen';
import InformationScreen from './Components/RequestorSignUp/InformationScreen';
import GetStartedScreen from './Components/RequestorSignUp/GetStartedScreen';
import SelectChoice from './Components/RequestorSignUp/SelectChoiceScreen';
import LoginScreen from './Components/RequestorSignUp/LoginScreen';

// Requestor onboarding 
import AddNameScreen from './Components/RequestorSignUp/AddNameScreen';
import CreateProfileScreen from './Components/RequestorSignUp/CreateProfileScreen';
import AddPhoneScreen from './Components/RequestorSignUp/AddPhoneScreen';
import TranslationLangScreen from './Components/RequestorSignUp/TranslationLangScreen';

// Requestor tutorial 
import HowToCallScreen from './Components/RequestorTutorial/HowToCallScreen';
import HowToSelectScreen from './Components/RequestorTutorial/HowToSelectScreen';
import WaitScreen from './Components/RequestorTutorial/WaitScreen';
import TipsScreen from './Components/RequestorTutorial/TipsScreen';

// Requestor Feedback 
import RatingScreen from './Components/RequestorFeedback/RatingScreen';
import GoodFeedbackScreen from './Components/RequestorFeedback/GoodFeebackScreen';
import BadFeedbackScreen from './Components/RequestorFeedback/BadFeedbackScreen';
import GoodThanksScreen from './Components/RequestorFeedback/GoodThanksScreen';
import BadThanksScreen from './Components/RequestorFeedback/BadThanksScreen';
import RequestNewCallScreen from './Components/RequestorFeedback/RequestNewCallScreen';

// Translator tutorial 
import AnsweringCallScreen from './Components/TranslatorTutorial/AnsweringCallScreen';
import PickingUpScreen from './Components/TranslatorTutorial/PickingUpScreen';
import ReceivingNotifScreen from './Components/TranslatorTutorial/ReceivingNotifScreen';
import TranslatorTipsScreen from './Components/TranslatorTutorial/TipsScreen';

// Translator pickup 
import TrHomeScreen from './Components/TranslatorPickup/HomeScreen';
import AcceptCall from './Components/TranslatorPickup/AcceptCall';

// Translator Feedback
import TrRatingScreen from './Components/TranslatorFeedback/RatingScreen';
import TrHelpScreen from './Components/TranslatorFeedback/WhatHelpScreen';

// instantiate Navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/* 
  schema
  - 1 tab on our bottom nav: HomeTab
  - 1 stack to supplement the tab: HomeStack
*/
function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerStyle: { backgroundColor: '#4A69D9'},
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerShown: false,
      }}>
      <Stack.Screen 
        name="Welcome"
        component={WelcomeScreen}
        options={{ title: 'Welcome page'}} 
      /> 
      <Stack.Screen 
        name="SignUp1"
        component={SelectLanguageScreen}
        options={{ title: 'Select Language page'}} 
      /> 
      <Stack.Screen 
        name="SignUp2"
        component={InformationScreen}
        options={{ title: 'Information page'}} 
      /> 
      <Stack.Screen 
        name="SignUp3"
        component={GetStartedScreen}
        options={{ title: 'Get Started page'}} 
      /> 
      <Stack.Screen 
        name="SignUp4"
        component={SelectChoice}
        options={{ title: 'Select user type page'}} 
      /> 
      <Stack.Screen 
        name="SignUp5"
        component={LoginScreen}
        options={{ title: 'Log In page'}} 
      /> 
      <Stack.Screen 
        name="Onboarding1"
        component={AddNameScreen}
        options={{ title: 'Add Name page'}} 
      /> 
      <Stack.Screen 
        name="Onboarding2"
        component={CreateProfileScreen}
        options={{ title: 'Create Profile page'}} 
      /> 
      <Stack.Screen 
        name="Onboarding3"
        component={AddPhoneScreen}
        options={{ title: 'Add Phone page'}} 
      /> 
      <Stack.Screen 
        name="Onboarding4"
        component={TranslationLangScreen}
        options={{ title: 'Choose translation language page'}} 
      /> 
      <Stack.Screen 
        name="Tutorial1"
        component={HowToCallScreen}
        options={{ title: 'How to Call page'}} 
      /> 
      <Stack.Screen 
        name="Tutorial2"
        component={HowToSelectScreen}
        options={{ title: 'How to Select page'}} 
      /> 
      <Stack.Screen 
        name="Tutorial3"
        component={WaitScreen}
        options={{ title: 'Wait page'}} 
      /> 
      <Stack.Screen 
        name="Tutorial4"
        component={TipsScreen}
        options={{ title: 'General Tips page'}} 
      /> 
      <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home page'}} 
        username="Bill"
      /> 
      <Stack.Screen 
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details Page'}}/>
      <Stack.Screen 
        name="Call"
        component={CallScreen}
        options={{ title: 'Calling...'}}/>
      <Stack.Screen 
        name="Feedback1"
        component={RatingScreen}
        options={{ title: 'Rating Page'}}/>
      <Stack.Screen 
        name="Feedback2"
        component={GoodFeedbackScreen}
        options={{ title: 'Feedback Page'}}/>
      <Stack.Screen 
        name="Feedback3"
        component={BadFeedbackScreen}
        options={{ title: 'Feedback Page'}}/>
      <Stack.Screen 
        name="Feedback4"
        component={GoodThanksScreen}
        options={{ title: 'Thanks Page'}}/>
      <Stack.Screen 
        name="Feedback5"
        component={RequestNewCallScreen}
        options={{ title: 'Request New Call Page'}}/>
      <Stack.Screen 
        name="Feedback6"
        component={BadThanksScreen}
        options={{ title: 'Thanks Page'}}/>

      {/* Translator pages */}
      <Stack.Screen 
        name="TrTutorial1"
        component={AnsweringCallScreen} />
      <Stack.Screen 
        name="TrTutorial2"
        component={ReceivingNotifScreen} />
      <Stack.Screen 
        name="TrTutorial3"
        component={PickingUpScreen} />
      <Stack.Screen 
        name="TrTutorial4"
        component={TranslatorTipsScreen} />
      <Stack.Screen 
        name="TrHome"
        component={TrHomeScreen} />
      <Stack.Screen 
        name="TrAcceptCall"
        component={AcceptCall} />
      <Stack.Screen 
        name="TrFeedback1"
        component={TrRatingScreen} />
      <Stack.Screen 
        name="TrFeedback3"
        component={TrHelpScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
              tabBarVisible: false,
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
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
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