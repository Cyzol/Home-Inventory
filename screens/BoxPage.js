import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import PropTypes from "prop-types";
import { db, auth } from "../firebase";
import { styles } from "../assets/styles/BoxPage.style";
import Box from "../components/Box/Box";

export default function BoxPage({navigation}) {
  const [boxes, setBoxes] = useState([]);

  const ref = db
    .collection("users")
    .doc(auth.currentUser.uid)
    .collection("boxes");

  const getBoxes = () => {
    ref.onSnapshot((querySnapshot) => {
      const boxesQuery = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id)
        boxesQuery.push(Object.assign(doc.data(),{"id": doc.id}));
      });
      setBoxes(boxesQuery);
    });
  };
  useEffect(() => {
    getBoxes();
  }, []);

  const renderItem = ({ item, index}) => {
    return <Box box={item} navigation={navigation} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.headerUserName}>Your Boxes</Text>
      </View>
      <View style={styles.boxesGird}>
        <FlatList
          data={boxes}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
        />
      </View>
    </View>
  );
}

BoxPage.propTypes = {};
