import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { styles } from "../assets/styles/LoginPage.style.js";

export default function LoginPage({ navigation }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home Inventory</Text>
      <Image
        style={styles.loginIcon}
        source={require("../assets/icons/loginPage.png")}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.titles}>Login</Text>
        <TextInput
          style={styles.loginInput}
          value={login}
          onChangeText={(login) => setLogin(login)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.titles}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.loginInput}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Menu")}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.signUpButton}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
