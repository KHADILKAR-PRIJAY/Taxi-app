import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "./Src/Screens/SplashScreen";
import LoginScreen from "./Src/Screens/LoginScreen";
import Signup from "./Src/Screens/Signup";
import Option from "./Src/Screens/Option";
import ForgotPass from "./Src/Screens/ForgotPass";
import RiderHome from "./Src/Screens/RiderHome";
import DriverHome from "./Src/Screens/DriverHome";
// import ChatScreen from "./Screens/ChatScreen";
// import Maaps from "./Screens/Maaps";
import UpdateScreen from "./Src/Screens/UpdateScreen";
import firebase from "firebase";
import MainNavigation from "./Src/Config/Navigation/MainNav";
import TripNavigation from "./Src/Config/Navigation/Driver_Tab";
import TripStack from "./Src/Config/Navigation/TripStack";

const Stack = createNativeStackNavigator();
const MyTheme = {
  dark: false,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

//firebase

const firebaseConfig = {
  apiKey: "AIzaSyBwzE-olBdU9zfQZ3FJQgJ2OouMw73XChM",
  authDomain: "tripapp-8378d.firebaseapp.com",
  projectId: "tripapp-8378d",
  storageBucket: "tripapp-8378d.appspot.com",
  messagingSenderId: "1082688569460",
  appId: "1:1082688569460:web:b01285dc37b78582589121",
  measurementId: "G-9WRQH7076C",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase
    .firestore()
    .settings({ experimentalForceLongPolling: true, merge: true }); // this is for to remove setting time warning..
}

export default function App({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer theme={MyTheme}>
        <MainNavigation />
      </NavigationContainer>
    </View>
  );
}