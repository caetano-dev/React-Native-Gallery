import React from 'react';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { api } from '../data/Api';
import { ImageItem } from './ImageItem';

export function ImageList() {

  const renderItem = ({ item }) => <ImageItem title={item.title} link={item.link} />;

  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList data={api} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </ScrollView>
    </SafeAreaView>
  );
}