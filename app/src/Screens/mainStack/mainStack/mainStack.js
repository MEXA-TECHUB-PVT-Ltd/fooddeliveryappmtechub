import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabsNavigator from '../Bottom Tabs Navigator/BottomTabsNavigator';
const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName='bottomTabs' screenOptions={{
      headerShown : false
    }} >
      <Stack.Screen name='bottomTabs' component={BottomTabsNavigator} />

    </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})