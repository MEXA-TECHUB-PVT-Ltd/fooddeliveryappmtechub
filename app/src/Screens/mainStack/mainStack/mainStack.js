import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabsNavigator from '../Bottom Tabs Navigator/BottomTabsNavigator';
import Drawer from '../Drawer.js/Drawer';
import NearByDeals from './NearByDeals';
import NearByRestaurants from './NearByRestaurants';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="drawer" component={Drawer} />
      <Stack.Screen name="nearByDeals" component={NearByDeals} />
      <Stack.Screen name="NearByRestaurants" component={NearByRestaurants} />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
