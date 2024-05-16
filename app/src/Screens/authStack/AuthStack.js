import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from './WelcomeScreen'
import mainStack from '../mainStack/mainStack/mainStack'
import SignIn from './SignIn'
import SignUp from './SignUp'

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='welcome' screenOptions={{
      
      headerShown : false
    }} >
      <Stack.Screen name='welcome' component={WelcomeScreen} />
      <Stack.Screen name='signIn' component={SignIn} />
      <Stack.Screen name='signUp' component={SignUp} />
      <Stack.Screen name='mainStack' component={mainStack} />

    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})