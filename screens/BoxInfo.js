import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { styles } from "../assets/styles/BoxInfo.style.js";
import { auth, db } from "../firebase";
import QRCode from "react-native-qrcode-svg";

export default function BoxInfo({ navigation, route: { params } }) {
  const ref = db
    .collection("users")
    .doc(auth.currentUser.uid)
    .collection("boxes");

  const handleDeleteBox = () => {
    ref
      .doc(params.id)
      .delete()
      .then(() => navigation.goBack())
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.infobox}>
        <View style={styles.descriptionBox}>
          <Text style={styles.info}>{params.description}</Text>
          <Text style={styles.place}>{params.place}</Text>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={handleDeleteBox}
          >
            <Text style={styles.deleteButtonFont}>Delete box</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.qrcode}>
          <QRCode style={styles.qr} value={params.id} />
        </View>
      </View>
      <View style={styles.listItemsContainer}>
        <View style={styles.itemsBox}>
          <Text style={styles.infoBox}>Items</Text>
        </View>
        <FlatList
          style={styles.flatList}
          data={params.listItems}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={1}
        />
      </View>
    </View>
  );
}
