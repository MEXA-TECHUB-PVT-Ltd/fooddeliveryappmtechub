import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import CustomHeader from '../../../Components/CustomHeader'
import TxtInput from '../../../Components/TxtInput'
import COLORS from '../../../../Config/Colors'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PaperBtn from '../../../Components/PaperButton'

const CardInfo = ({navigation, route}) => {
  let {setIsCard} = route.params

  return (
    <View style={styles.container} >
      <CustomHeader
          heading={'Card Information'}
          iconSize={30}
          left={'chevron-left'}
          leftOnpress={() => navigation.goBack()}
        />
        <View style={styles.contentContainer}>
          <View>
          <TxtInput placeholder={"Card Holder's Name"} />
          <TxtInput placeholder={"Card Number"} keyboardType={'number-pad'} />
          <TxtInput placeholder={"Expiry Date"} />
          <TxtInput placeholder={"CVV/CVC"} keyboardType={'number-pad'} />
          </View>
          <View>
            <PaperBtn containerStyle={{backgroundColor: COLORS.bgColor}} textColor={COLORS.white} onPress={()=> {navigation.navigate('checkout')
              setIsCard(true)
             }} >ADD</PaperBtn>
          </View>
        </View>
    </View>
  )
}

export default CardInfo

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COLORS.white
  },
  contentContainer:{
    flex: 1,
    paddingHorizontal: wp('5%'),
    justifyContent: 'space-between'
  }
})