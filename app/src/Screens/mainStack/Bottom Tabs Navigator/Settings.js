import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../../Components/CustomHeader'
import COLORS from '../../../../Config/Colors'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import SettingsBtn from '../../../Components/SettingsBtn';

const Settings = () => {
  return (
    <View style={styles.container} >
      <CustomHeader heading={'Settings'} left={'chevron-left'} right={'logout'} />
      <View style={styles.profileInfo} >
        <Image source={{uri: 'https://robohash.org/23432453'}} style={styles.Image} />
        <Text style={styles.userName} >{`Fuzzy`}</Text>
        <Text style={styles.userMail}>{`Fuzzy@example.com`}</Text>
        <Text style={styles.userPhone}>{`0000 0000000`}</Text>
      </View>

      <View style={styles.btnsContainer} >

      <SettingsBtn text={'Update Profile'} icon = {'chevron-right'} />
      <SettingsBtn text={'Change Language'} icon = {'chevron-right'} />
      <SettingsBtn text={'Terms & Conditions'} icon = {'chevron-right'} />
      <SettingsBtn text={'Privacy Policy'} icon = {'chevron-right'} />
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white
    },
    Image: {
        resizeMode: 'cover',
        width: wp(24),
        borderRadius: 10,
        height: hp(12),
    },
    profileInfo:{
        alignItems: 'center'
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.bgColor,
        marginTop: hp(1)
    },
    userMail:{
        marginTop: hp(1)
    },
    userPhone: {
        marginTop: hp(1)
    },
    btnsContainer:{
        marginHorizontal: hp('3%'),
        marginVertical: hp('3%'),
        justifyContent: 'space-between', 
        flex: 1
    }
})