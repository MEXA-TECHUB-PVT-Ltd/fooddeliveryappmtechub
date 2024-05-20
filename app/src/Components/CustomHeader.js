import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconButton } from 'react-native-paper'
import COLORS from '../../Config/Colors'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    RFValue,
  } from 'react-native-responsive-screen';

const CustomHeader = ({right, heading, left, iconSize, rightOnpress }) => {
  return (
    <View style={styles.container} >
        <IconButton icon={right} size={iconSize} iconColor={COLORS.bgColor} onPress={rightOnpress} />
      <Text style={styles.heading} >{heading}</Text>
      <IconButton icon={left} size={iconSize} iconColor={COLORS.bgColor} />
      
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
    container :{
        // backgroundColor: COLORS.cardBgColor,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingVertical: hp(2.5)
    },
    heading: {
        color: COLORS.bgColor,
        fontSize: hp(3),
        fontWeight: '600'
    }
})