import React, { useState, useEffect } from "react";

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import ChatScreen from "./Screens/ChatScreen";
// import Maaps from "./Screens/Maaps";
import DriverHomeScreen from "./Driver_Tab";
import DriverTrips from "../../Screens/PostTrip";
import DriverHome from "../../Screens/DriverHome";

const Stack = createNativeStackNavigator();

//firebase

export default function TripStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="DriverHome">
      <Stack.Screen
        name="PostTrip"
        component={DriverTrips}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DriverHome"
        component={DriverHome}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}