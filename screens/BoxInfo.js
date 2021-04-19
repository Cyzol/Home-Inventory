import React from "react";
import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import {styles } from "../assets/styles/BoxInfo.style.js";
import {auth, db} from "../firebase";

export default function BoxInfo({navigation, route: { params } }) {

    const ref = db
        .collection("users")
        .doc(auth.currentUser.uid)
        .collection("boxes");

   const handleDeleteBox = () => {
        ref
            .doc(params.id)
            .delete()
            .then(()=> navigation.goBack())
            .catch((error) => {console.error("Error removing document: ", error)});
   }


  return (
      <View style={styles.container}>
          <TouchableOpacity
              style={styles.loginButton}
              onPress={handleDeleteBox}
          ><Text>Delete box</Text>
          </TouchableOpacity>
          <View  style={styles.containerTitle}>
              <Text style={styles.titles}>Place: </Text>
              <View style={styles.place}><Text style={styles.text}>{params.place}</Text></View>
          </View>
          <View  style={styles.containerTitle}>
              <Text style={styles.titles}>Description: </Text>
              <View style={styles.place}><Text style={styles.text}>{params.description}</Text></View>
          </View>

          <View contentContainerStyle={styles.scrollView}>
              <Text style={styles.titles}>Items: </Text>
              {params.listItems.map((item, index) => (
                  <View style={styles.item}><Text style={styles.text}>{`Item ${index}: ${item}`}</Text></View>
              ))}
          </View>
      </View>
  );
}
