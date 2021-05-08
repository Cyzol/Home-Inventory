import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginPage from "./screens/LoginPage.js";
import MainMenuPage from "./screens/MainMenuPage";
import RegisterPage from "./screens/RegisterPage";
import BoxPage from "./screens/BoxPage";
import AddBox from "./screens/AddBox.js";
import BoxInfo from "./screens/BoxInfo.js";
import QrCodeScanner from "./screens/QrCodeScanner";
import GenerateQr from "./screens/GenerateQr.js";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Menu" component={MainMenuPage} />
        <Stack.Screen name="BoxPage" component={BoxPage} />
        <Stack.Screen name="AddBox" component={AddBox} />
        <Stack.Screen name="BoxInfo" component={BoxInfo} />
        <Stack.Screen name="QrCodeScanner" component={QrCodeScanner} />
        <Stack.Screen name="GenerateQR" component={GenerateQr} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
