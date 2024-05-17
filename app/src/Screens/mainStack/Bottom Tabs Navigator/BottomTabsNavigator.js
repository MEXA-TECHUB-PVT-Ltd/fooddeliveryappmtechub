import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Discover from './Discover'
import { Icon } from 'react-native-paper'
import COLORS from '../../../../Config/Colors'
// import Drawer from '../Drawer.js/Drawer'

const Tab = createBottomTabNavigator()
const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: COLORS.bgColor
      
    }} >
        {/* <Tab.Screen name='drawer' component={Drawer}/> */}
      <Tab.Screen name='Discover' component={Discover} options={{
        tabBarIcon:  ({size, color})=>{
          return(
            <Icon source={'apple-keyboard-command'} size={size} color={color} />
          )
        }
      }} />
    </Tab.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})