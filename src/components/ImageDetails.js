import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function ImageDetails({ route }) {
  const { title, link } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: link }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});
