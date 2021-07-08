import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gallery</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#139f1c",
    width: "100%",
    paddingLeft: 10,
    justifyContent: "center",
    height: 60,
  },
  text: {
    fontSize: 30,
  },
});
