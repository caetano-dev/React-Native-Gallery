import React from "react";
import { StyleSheet, View, Image, Text, ScrollView,Button } from "react-native";
import { api } from "../data/Api";

export function ImageList({ navigation }) {
  return (
    <View >
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Image')}
      />
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
