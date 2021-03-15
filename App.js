import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import LoginPage from "./screens/LoginPage.js";
import MainMenuPage from "./screens/MainMenuPage";
import RegisterPage from "./screens/RegisterPage";

export default function App() {
  return <MainMenuPage />;
}
