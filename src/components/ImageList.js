import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, View, StyleSheet, Text } from 'react-native';
import { api } from '../data/Api';
import { ImageItem } from './ImageItem';

export function ImageList() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    /*TO-DO: fix the link and add the values to the flatlist*/
    axios.get('http://127.0.0.1:8000/').then((res) => {
      const data = res.data;
      setImages(data.link);
    });
  }, []);

  const renderItem = ({ item }) => <ImageItem title={item.title} link={item.link} />;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>{images}</Text>
        <FlatList data={api} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: 15, borderColor: 'red' },
  title: { fontSize: 20, fontWeight: 'bold' },
});
