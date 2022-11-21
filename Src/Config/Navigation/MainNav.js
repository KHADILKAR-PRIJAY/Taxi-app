import React, { useState, useEffect } from "react";

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "./../../Screens/SplashScreen";
import LoginScreen from "./../../Screens/LoginScreen";
import Signup from "./../../Screens/Signup";
import Option from "./../../Screens/Option";
import ForgotPass from "./../../Screens/ForgotPass";
import RiderHome from "./../../Screens/RiderHome";
import DriverHome from "./../../Screens/DriverHome";
// import ChatScreen from "./Screens/ChatScreen";
// import Maaps from "./Screens/Maaps";
import UpdateScreen from "./../../Screens/UpdateScreen";
import DriverHomeScreen from "./Driver_Tab";

const Stack = createNativeStackNavigator();

//firebase

export default function MainNavigation({ navigation }) {
    return ( <
            Stack.Navigator initialRouteName = "Splash" >
            <
            Stack.Screen name = "Splash"
            component = { Splash }
            options = {
                { headerShown: false }
            }
            />

            <
            Stack.Screen name = "Signup"
            component = { Signup }
            options = {
                { headerShown: false }
            }
            /> <
            Stack.Screen name = "LoginScreen"
            component = { LoginScreen }
            options = {
                { headerShown: false }
            }
            /> <
            Stack.Screen name = "Option"
            component = { Option }
            options = {
                { headerShown: false }
            }
            /> <
            Stack.Screen name = "RiderHome"
            component = { RiderHome }
            options = {
                {
                    title: "Rider Home",
                }
            }
            /> <
            Stack.Screen name = "DriverHome"
            component = { DriverHomeScreen }
            options = {
                {
                    headerShown: false,
                }
            }
            /> {
            /* <Stack.Screen
                      name="ChatScreen"
                      component={ChatScreen}
                      options={{ headerShown: false }}
                    /> */
        } <
        Stack.Screen name = "ForgotPass"
    component = { ForgotPass }
    options = {
        { headerShown: false }
    }
    /> {
    /* <Stack.Screen
              name="Maaps"
              component={Maaps}
              options={{ headerShown: false }}
            /> */
} <
Stack.Screen name = "UpdateScreen"
component = { UpdateScreen }
options = {
    { headerShown: false }
}
/> < /
Stack.Navigator >
);
}