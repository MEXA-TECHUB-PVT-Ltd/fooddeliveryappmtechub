import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Discover from './Discover'
import Drawer from '../Drawer.js/Drawer'

const Tab = createBottomTabNavigator()
const BottomTabs = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='drawer' component={Drawer}/>
      <Tab.Screen name='Discover' component={Discover} />
    </Tab.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})