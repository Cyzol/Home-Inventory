import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";

import { styles } from "../assets/styles/LoginPage.style.js";
import { auth } from "../firebase.js";

export default function LoginPage({ navigation }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        navigation.replace("Menu");
      }
    });

    return unsubscribe;
  }, []);


  const signIn = () => {
    auth.signInWithEmailAndPassword(login,password)
    .catch(error => alert(error));
  }

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
        onPress={signIn}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.signUpButton}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
