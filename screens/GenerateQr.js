import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { auth, db } from "../firebase";

const GenerateQr = () => {
  const [boxes, setBoxes] = useState([]);
  const ref = db
    .collection("users")
    .doc(auth.currentUser.uid)
    .collection("boxes");

  const getBoxes = async () => {
    await ref.onSnapshot((querySnapshot) => {
      const boxesQuery = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id)
        boxesQuery.push(Object.assign(doc.data(), { id: doc.id }));
      });
      setBoxes(boxesQuery);
    });
  };
  useEffect(() => {
    getBoxes();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Text> textInComponent </Text> */}
      <QRCode value="2Qy9fa8sy0JLldPAQ9OK" />
    </View>
  );
};

export default GenerateQr;
