import * as React from "react";
import { Component } from "react";
import { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Button,
    Image,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Input, NativeBaseProvider } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DriverTrips from "../../Screens/PostTrip";
import DriverProfile from "../../Screens/DriverProfile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TripStack from "./TripStack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function DriverHomeScreen({ navigation, route, props }) {
    return ( <
        Tab.Navigator
        // initialRouteName="Feed"
        screenOptions = {
            {
                tabBarActiveTintColor: "white",
                tabBarTintColor: "white",
                tabBarLabelStyle: { fontSize: 15 },
                tabBarStyle: { backgroundColor: "black" },
            }
        } >
        <
        Tab.Screen name = "Trip"
        component = { TripStack }
        options = {
            {
                // tabBarLabel: "Trips",
                headerShown: false,
                tabBarIcon: ({ tintColor }) => {
                    return ( <
                        Ionicons name = "stats-chart-sharp"
                        color = "white"
                        size = { 20 }
                        />
                    );
                },
            }
        }
        />

        <
        Tab.Screen name = "Profile"
        component = { DriverProfile }
        options = {
            {
                tabBarLabel: "Profile",
                tabBarIcon: ({ tintColor }) => {
                    return <Ionicons name = "person-outline"
                    color = "white"
                    size = { 20 }
                    />;
                },
            }
        }
        /> < /
        Tab.Navigator >
    );
}