import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { styles } from "../assets/styles/LoginPage.style.js";
import { auth } from "../firebase.js";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    auth
      .createUserWithEmailAndPassword(login, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          <Text style={styles.titles}>E-mail</Text>
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

        <TouchableOpacity style={styles.loginButton} onPress={register}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
