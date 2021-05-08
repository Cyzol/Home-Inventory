import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { auth, db } from "../firebase";

const QrCodeScanner = ({ navigation }) => {
  const ref = db
    .collection("users")
    .doc(auth.currentUser.uid)
    .collection("boxes");

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data: id }) => {
    setScanned(true);
    const { description, place, listItems } = await getItem(id);
    navigation.navigate("BoxInfo", { description, id, place, listItems });
    // alert(`${id}`);
  };

  const getItem = async (id) => {
    const doce = await ref.doc(id).get();
    if (!doce.exists) {
      console.log("No such document!");
    } else {
      return doce.data();
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  barCodeView: {
    width: "100%",
    height: "50%",
    marginBottom: 40,
  },
});

QrCodeScanner.propTypes = {};

export default QrCodeScanner;
