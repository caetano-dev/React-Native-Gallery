import React from 'react';
import { SafeAreaView, FlatList, View, StyleSheet } from 'react-native';
import { api } from '../data/Api';
import { ImageItem } from './ImageItem';

export function ImageList() {
  const renderItem = ({ item }) => <ImageItem title={item.title} link={item.link} />;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList data={api} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: 15, borderColor: 'red' },
});
