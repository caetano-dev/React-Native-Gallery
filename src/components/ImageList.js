import React from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { api } from "../data/Api";

export function ImageList() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {api.map((image) => (
          <View key={image.id} style={styles.imageContainer}>
            <Text style={styles.title}>{image.title}</Text>
            <Image source={{ uri: image.link }} style={styles.image} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  title: { fontSize: 15 },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
