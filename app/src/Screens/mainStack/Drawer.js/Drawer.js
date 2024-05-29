import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyWallet from './MyWallet';
import BottomTabs from '../Bottom Tabs Navigator/BottomTabsNavigator';
import Favorities from './Favorities';

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
      <DrawerNav.Screen name="myWallet" component={MyWallet} options={{
        title: 'My Wallet'
      }} />
      <DrawerNav.Screen name="favorities" component={Favorities} options={{
        title: 'My Favorities'
      }} />
    </DrawerNav.Navigator>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
