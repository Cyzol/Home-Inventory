import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { styles } from "../assets/styles/LoginPage.style.js";
import LoginPage from "./LoginPage.js";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.loginIcon}
        source={require("../assets/icons/registerPage.png")}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.titles}>Name</Text>
        <TextInput
          style={styles.loginInput}
          value={name}
          onChangeText={(name) => setName(name)}
        />
      </View>
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
        onPress={() =>
          console.log(
            `Name : ${name} \nLogin: ${login} \nPassowrd: ${password}`
          )
        }
      >
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log("Sign In")}>
        <Text style={styles.signUpButton}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
