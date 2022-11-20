import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MapView from 'react-native-maps';
import Splash from './Src/Screens/SplashScreen';
import LoginScreen from './Src/Screens/LoginScreen';
import Signup from './Src/Screens/Signup';
import Option from './Src/Screens/Option';
import ForgotPass from './Src/Screens/ForgotPass';
import RiderHome from './Src/Screens/RiderHome';
import DriverHome from './Src/Screens/DriverHome';
import ChatScreen from './Src/Screens/ChatScreen';




const Stack = createStackNavigator();
const MyTheme = {
    dark: false,
    colors: {
        primary: 'rgb(255, 45, 85)',
        background: 'rgb(242, 242, 242)',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};

export default function App() {
    return ( <
        NavigationContainer theme = { MyTheme } >
        <
        Stack.Navigator >

        <
        Stack.Screen name = "Splash"
        component = { Splash }
        options = {
            { headerShown: false } }
        />

        <
        Stack.Screen name = "Signup"
        component = { Signup }
        options = {
            { headerShown: false } }
        />

        <
        Stack.Screen name = "LoginScreen"
        component = { LoginScreen }
        options = {
            { headerShown: false } }
        /> <
        Stack.Screen name = "Option"
        component = { Option }
        options = {
            { headerShown: false } }
        /> <
        Stack.Screen name = "RiderHome"
        component = { RiderHome }
        options = {
            {
                title: 'Rider Home',

            }
        }
        /> <
        Stack.Screen name = "DriverHome"
        component = { DriverHome }
        options = {
            {
                title: 'Driver Home',

            }
        }
        /> <
        Stack.Screen name = "ChatScreen"
        component = { ChatScreen }
        options = {
            { headerShown: false } }
        /> <
        Stack.Screen name = "ForgotPass"
        component = { ForgotPass }
        options = {
            { headerShown: false } }
        /> <
        /Stack.Navigator> <
        /NavigationContainer>
    );
}