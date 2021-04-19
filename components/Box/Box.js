import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Box.style";

export default function Box({ navigation, box: { description, id, place, listItems }}) {
  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() => navigation.navigate("BoxInfo", { description, id, place, listItems })}
    >
      <Text>{description}</Text>
    </TouchableOpacity>
  );
}
