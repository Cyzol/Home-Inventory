import React from "react";
import { Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

const GenerateQr = () => {
  return (
    <View>
      <Text> textInComponent </Text>
      <QRCode
        value="blalala"
      />
    </View>
  );
};

export default GenerateQr;
