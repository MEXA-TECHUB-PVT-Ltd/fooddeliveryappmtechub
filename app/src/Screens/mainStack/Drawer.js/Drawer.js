import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Wallet from './Wallet';

const DrawerNav = createDrawerNavigator();
const Drawer = () => {
  return (
    <DrawerNav.Navigator>
      <DrawerNav.Screen name='myWallet' component={Wallet} />
    </DrawerNav.Navigator>
  )
}

export default Drawer

const styles = StyleSheet.create({})