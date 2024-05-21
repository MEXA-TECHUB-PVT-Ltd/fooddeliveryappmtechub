import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabsNavigator from '../Bottom Tabs Navigator/BottomTabsNavigator';
import Drawer from '../Drawer.js/Drawer';
import NearBy from './NearBy';
import ItemDetails from './ItemDetails';
import RestaurantDetail from './RestaurantDetail';
import TabViewExample from '../../../Components/Testing';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
    // initialRouteName='TabViewExample'
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="drawer" component={Drawer} />
      <Stack.Screen name="nearBy" component={NearBy} />
      <Stack.Screen name="TabViewExample" component={TabViewExample} />
      <Stack.Screen name='itemDetails' component={ItemDetails} />
      <Stack.Screen name='restaurantDetail' component={RestaurantDetail} />
      
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
