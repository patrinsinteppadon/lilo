// // React Native Bottom Navigation
// // https://aboutreact.com/react-native-bottom-navigation/
// import 'react-native-gesture-handler';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// // import firebase from 'firebase/app';
// // import 'firebase/database';
// import store from './store';
// import {Provider} from 'react-redux';

// // following tutorial from https://aboutreact.com/react-native-bottom-navigation/
// import {
//   NavigationContainer
// } from '@react-navigation/native';
// import {
//   createStackNavigator
// } from '@react-navigation/stack';
// import {
//   createBottomTabNavigator
// } from '@react-navigation/bottom-tabs';
// import
//  MaterialCommunityIcons
// from 'react-native-vector-icons/MaterialCommunityIcons';

// import HomeScreen from './Components/HomeScreen.js'
// import UserScreen from './Components/UserScreen.js';
// import CallScreen from './Components/CallScreen';
// import DetailsScreen from './pages/DetailsScreen'; // take out in mvp
// import ProfileScreen from './pages/ProfileScreen';
// import SettingsScreen from './pages/SettingsScreen';

// // instantiate Navigators
// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// /* 
//   schema
//   - 2 tabs on our bottom nav: HomeTab, and UserTab
//   - 2 stacks to supplement the tabs: HomeStack, and UserStack
// */
// function HomeStack() {
//   return (
//     <Stack.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         headerStyle: { backgroundColor: '#4A69D9'},
//         headerTintColor: '#fff',
//         headerTitleStyle: { fontWeight: 'bold' }
//       }}>
//       <Stack.Screen 
//         name="Home"
//         component={HomeScreen}
//         options={{ title: 'Home Page'}} 
//         username="Bill"
//       /> 
//       <Stack.Screen 
//         name="Details"
//         component={DetailsScreen}
//         options={{ title: 'Details Page'}}/>
//       <Stack.Screen 
//         name="Call"
//         component={CallScreen}
//         options={{ title: 'Calling...'}}/>
//     </Stack.Navigator>
//   );
// }

// // seems like more of a backend manifest. Tab Navigator is the frontend part
// // of the navigation, but we send this info along to Settings bc the Settings
// // page will need to navigate you to Details and Profiles if you click on
// // the corresponding button while you're there
// function UserStack() {
//   return (
//     <Stack.Navigator
//       initialRouteName="User"
//       screenOptions={{
//         headerStyle: { backgroundColor: '#4A69D9' },
//         headerTintColor: '#fff',
//         headerTitleStyle: { fontWeight: 'bold' }
//       }}>
//       <Stack.Screen
//         name="User"
//         component={UserScreen}
//         options={{ title: 'User Profile' }}/>
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Tab.Navigator>
//           <Tab.Screen
//             name="HomeStack"
//             component={HomeStack}
//             options={{
//               tabBarLabel: 'Home',
//               tabBarIcon: ({color, size}) => (
//                 <MaterialCommunityIcons 
//                   name="home"
//                   color={color}
//                   size={size}
//                 />
//               ),
//             }}  
//           />
//           <Tab.Screen
//             name="UserStack"
//             component={UserStack}
//             options={{
//               tabBarLabel: 'Profile',
//               tabBarIcon: ({color, size}) => (
//                 <MaterialCommunityIcons 
//                   name="human"
//                   color={color}
//                   size={size}
//                 />
//               ),
//             }}
//           />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#fff',
//     backgroundColor: 'lightblue',
//     alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });

import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { mediaDevices, RTCView } from 'react-native-webrtc';

import { connect } from 'react-redux';
import { joinRoom } from './store/actions/videoActions';

const height = Dimensions.get('window').height;

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    let isFront = true;
    mediaDevices.enumerateDevices().then(sourceInfos => {
      console.log(sourceInfos);
      let videoSourceId;
      for (let i = 0; i < sourceInfos.length; i++) {
        const sourceInfo = sourceInfos[i];
        if(sourceInfo.kind == "videoinput" && sourceInfo.facing == (isFront ? "front" : "environment")) {
          videoSourceId = sourceInfo.deviceId;
        }
      }
      mediaDevices.getUserMedia({
        audio: true,
        video: {
          width: 640,
          height: 480,
          frameRate: 30,
          facingMode: (isFront ? "user" : "environment"),
          deviceId: videoSourceId
        }
      })
      .then(stream => {
        console.log(stream)
        this.props.joinRoom(stream);
      })
      .catch(error => {
        console.log(error)
      });
    });
  }

  render() {
    const { myStream, remoteStream } = this.props.video;
    return (
      <View style={{flex: 1, justifyContent: 'flex-start', padding: 1}}>
        <View 
          style={{flex: 1, justifyContent: 'center', height: height * 0.5, borderColor: 'pink', borderWidth: 4}}>
          {this.props.video.myStream ? (
            <RTCView streamURL = {this.props.video.myStream.toURL()} 
            style={{height: height * 0.4}}
            />
          ): null}
        </View>
        <View
          style={{flex: 1, justifyContent: 'center', height: height * 0.5, borderColor: 'green', borderWidth: 4}}>
          {remoteStream ? (
            <RTCView streamURL = {remoteStream.toURL()}
            style={{height: height * 0.4}}
            />
          ): null}
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({video}) => ({video});

export default connect(mapStateToProps, { joinRoom })(App);




// export default function App() {
//     return (
//       <View>
//         <Text>App</Text>
//        </View>
//     );
// }