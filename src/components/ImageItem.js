import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function ImageItem({ title, link }) {
  const navigation = useNavigation();

  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Image', { title, link })}
        activeOpacity={0.8}
      >
        <Text style={styles.title}>{title}</Text>
        <Image source={{ uri: link }} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    paddingBottom: 8,
    borderRadius: 8,
  },
});
