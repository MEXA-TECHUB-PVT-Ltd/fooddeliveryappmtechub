import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabsNavigator from '../Bottom Tabs Navigator/BottomTabsNavigator';
import Drawer from '../Drawer.js/Drawer';
import NearBy from './NearBy';
import NearByRestaurants from './NearByRestaurants';
import ItemDetails from '../../../Components/ItemDetails';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="drawer" component={Drawer} />
      <Stack.Screen name="nearBy" component={NearBy} />
      <Stack.Screen name="nearByRestaurants" component={NearByRestaurants} />
      <Stack.Screen name='itemDetails' component={ItemDetails} />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
