import React, { useState } from "react";
import { useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { styles } from "../assets/styles/MainMenuPage.style.js";
import { auth } from "../firebase.js";

export default function MainMenuPage({ navigation }) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(auth.currentUser.displayName);
  }, []);

  const loggingOut = () => {
    auth.signOut().catch((error) => alert(error.message));
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.userNameSection}>
        <Text style={styles.headerUserName}>Hi, {userName}</Text>
      </View>
      <View style={styles.imageSection}>
        <Image source={require("../assets/icons/mainMenuPage.png")} />
      </View>

      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.mainMenuButton}>
          <Text style={styles.buttonText}>Generate Qr</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainMenuButton}>
          <Text style={styles.buttonText}>See all items</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainMenuButton}>
          <Text style={styles.buttonText}>Add new item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainMenuButton}>
          <Text style={styles.buttonText}>Scan Qr</Text>
        </TouchableOpacity>
      </View>
        <TouchableOpacity onPress={loggingOut}>
          <Text style={{ marginBottom: 30 }}>Sign Out</Text>
        </TouchableOpacity>
    </View>
  );
}
