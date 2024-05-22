import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './app/src/Screens/authStack/AuthStack';

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
