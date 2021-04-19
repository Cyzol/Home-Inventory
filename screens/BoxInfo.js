import React from "react";
import { View, Text } from "react-native";

export default function BoxInfo({ route: { params } }) {
  return (
    <View>
      <Text>Place: {params.place}</Text>
      <Text>Description: {params.description}</Text>
      {params.listItems.map((item, index) => (
        <Text key={index}>{`Item ${index}: ${item}`}</Text>
      ))}
    </View>
  );
}
