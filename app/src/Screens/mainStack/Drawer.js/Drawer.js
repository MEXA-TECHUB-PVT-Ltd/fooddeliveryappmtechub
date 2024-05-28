import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Wallet from './Wallet';
import BottomTabs from '../Bottom Tabs Navigator/BottomTabsNavigator';

const DrawerNav = createDrawerNavigator();
const Drawer = () => {
  return (
    <DrawerNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <DrawerNav.Screen name="bottomTabs" component={BottomTabs} options={{
        title: 'Discover'
      }} />
      <DrawerNav.Screen name="myWallet" component={Wallet} />
    </DrawerNav.Navigator>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
