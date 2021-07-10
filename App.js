import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageList } from './src/components/ImageList.js';
import { ImageDetails } from './src/components/ImageDetails';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Images">
        <Stack.Screen name="Gallery" component={ImageList} />
        <Stack.Screen name="Image" component={ImageDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
