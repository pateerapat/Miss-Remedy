import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

import PharmacistHomeScreen from "../screens/PharmacistHomeScreen";
import PharmacistChatScreen from "../screens/PharmacistChatScreen";
import PharmacistUserDataScreen from "../screens/PharmacistUserDataScreen";

import UserChatScreen from "../screens/UserChatScreen";
import UserHomeScreen from "../screens/UserHomeScreen";

const MainNavigator = createNativeStackNavigator();

export default function MissRemedyNavigator() {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator 
        initialRouteName="WelcomeScreen"
        screenOptions={{
          headerShown: false}}>

        <MainNavigator.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{title: "Welcome Screen"}}/>
        <MainNavigator.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{title: "Register Screen"}}/>
        <MainNavigator.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{title: "Login Screen"}}/>
        <MainNavigator.Screen
          name="UserHomeScreen"
          component={UserHomeScreen}
          options={{title: "User Home Screen"}}/>
        <MainNavigator.Screen
          name="PharmacistHomeScreen"
          component={PharmacistHomeScreen}
          options={{title: "Pharmacist Home Screen"}}/>
          <MainNavigator.Screen
          name="PharmacistUserDataScreen"
          component={PharmacistUserDataScreen}
          options={{title: "Pharmacist UserData Screen"}}/>
          <MainNavigator.Screen
          name="PharmacistChatScreen"
          component={PharmacistChatScreen}
          options={{title: "Pharmacist Chat Screen"}}/>
          <MainNavigator.Screen
          name="UserChatScreen"
          component={UserChatScreen}
          options={{title: "User Chat Screen"}}/>

      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}
