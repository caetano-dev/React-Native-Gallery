import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { api } from '../data/Api';

export function ImageList() {
  const navigation = useNavigation();

  return (
    <View>
      <ScrollView>
        {api.map((image) => (
          <View key={image.id} style={styles.imageContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Image', { title: image.title, link: image.link })}
              activeOpacity={0.8}
            >
              <Text style={styles.title}>{image.title}</Text>
              <Image source={{ uri: image.link }} style={styles.image} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { fontSize: 15 },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});
