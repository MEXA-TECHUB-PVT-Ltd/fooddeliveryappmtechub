import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import COLORS from '../../../Config/Colors';
import {Formik} from 'formik';
import * as yup from 'yup';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  RFValue,
} from 'react-native-responsive-screen';
import PaperBtn from '../../Components/PaperButton';
import {Image} from 'react-native';
import {TextInput, IconButton, Icon} from 'react-native-paper';
import { BlurView } from '@react-native-community/blur';

const SignIn = ({navigation, route}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSignin, setIsSignin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  useLayoutEffect(() => {
    route.params.navigateTo === 'signIn'
      ? setIsSignin(true)
      : setIsSignup(true);
  }, []);

  const validationFunction = yup.object().shape({
    email: yup.string().email('Invalid Email').required('Email Required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password Required'),
    phone: yup
      .string()
      .matches(/^[0-9]{11}$/, 'Phone number must be exactly 10 digits')
      .required('Phone number is required'),
  });

  const handleSubmit = values => {
    console.log(values.email);
    isSignin
      ? navigation.navigate('mainStack')
      : navigation.navigate('verification');
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <View
        style={{flexDirection: 'row', paddingRight: 100, position: 'relative'}}>
        <Image
          source={require('../../assets/Bg_Imgs/SignInbgimg.png')}
          style={{width: wp('80%'), height: hp('39%')}}
          resizeMode="contain"
        />
        <PaperBtn
          textColor={COLORS.bgColor}
          containerStyle={{
            position: 'absolute',
            borderColor: COLORS.bgColor,
            borderWidth: 1,
            top: hp(2),
            right: hp(0.7),
          }}
          mode={'outlined'}
          onPress={() => navigation.navigate('signUp')}>
          {isSignin ? 'SignUp' : 'SignIn'}
        </PaperBtn>
      </View>

      <Formik
        initialValues={{email: '', password: '', phone: ''}}
        validationSchema={validationFunction}
        onSubmit={handleSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <View style={{padding: hp(3)}}>
            <Text
              style={{
                color: COLORS.orangeTextColor,
                fontSize: hp('4'),
                fontWeight: '600',
                textAlign: 'center',
              }}>
              {isSignin ? 'Signin' : 'SignUp'}
            </Text>

            {isSignup && (
              <TextInput
                mode="flat"
                underlineColor={COLORS.bgColor}
                activeUnderlineColor={COLORS.orangeTextColor}
                placeholder="Username (Optional)"
                selectionColor={COLORS.orangeTextColor}
                style={{
                  backgroundColor: COLORS.inputBgColor,
                  height: hp('6'),
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  marginTop: hp('3'),
                }}
              />
            )}
            <TextInput
              mode="flat"
              underlineColor={COLORS.bgColor}
              activeUnderlineColor={COLORS.orangeTextColor}
              placeholder="Email Address"
              selectionColor={COLORS.orangeTextColor}
              value={values.email}
              onChangeText={handleChange('email')}
              style={{
                backgroundColor: COLORS.inputBgColor,
                height: hp('6'),
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                // borderRadius: 30,
                paddingVertical: hp('0.5'),
                marginVertical: hp('3'),
              }}
            />
            {touched.email && errors.email && (
              setTimeout(() => {
                <View
                style={{
                  backgroundColor: COLORS.error,
                  borderRadius: 20,
                  justifyContent: 'center',
                  padding: 7,
                  paddingLeft: 16,
                }}>
                <Text style={styles.errorText}>{errors.email}</Text>
              </View>
                console.log('Executing code at intervals');
              }, 400)
              
            )}

            {isSignin && (
              <TextInput
                mode="flat"
                underlineColor={COLORS.bgColor}
                activeUnderlineColor={COLORS.orangeTextColor}
                placeholder={'Enter Password'}
                secureTextEntry={isVisible}
                selectionColor={COLORS.orangeTextColor}
                keyboardType={'default'}
                value={values.password}
                onChangeText={handleChange('password')}
                right={
                  <TextInput.Icon
                    icon="eye"
                    size={20}
                    style={{paddingTop: 10}}
                    onPress={() => setIsVisible(prev => !prev)}
                  />
                }
                style={{
                  backgroundColor: COLORS.inputBgColor,
                  height: hp('6'),
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  paddingVertical: hp('0.5'),
                  marginBottom: hp('6'),
                  justifyContent: 'center',
                }}
              />
            )}
            {isSignin && touched.password && errors.password && (
              <BlurView
                style={{
                  backgroundColor: COLORS.error,
                  borderRadius: 20,
                  justifyContent: 'center',
                  padding: 7,
                  paddingLeft: 16,
                }}>
                <Text style={styles.errorText}>{errors.password}</Text>
              </BlurView>
            )}

            {isSignup && (
              <TextInput
                mode="flat"
                underlineColor={COLORS.bgColor}
                activeUnderlineColor={COLORS.orangeTextColor}
                placeholder={'Phone Number'}
                selectionColor={COLORS.orangeTextColor}
                keyboardType={'numeric'}
                value={isSignin ? values.password : values.phone}
                onChangeText={handleChange('phone')}
                style={{
                  backgroundColor: COLORS.inputBgColor,
                  height: hp('6'),
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  paddingVertical: hp('0.5'),
                  marginBottom: hp('6'),
                  justifyContent: 'center',
                }}
              />
            )}

            {isSignup && touched.phone && errors.phone && (
              <View
                style={{
                  backgroundColor: COLORS.error,
                  borderRadius: 20,
                  justifyContent: 'center',
                  padding: 7,
                  paddingLeft: 16,
                }}>
                <Text style={styles.errorText}>{errors.phone}</Text>
              </View>
            )}

            <PaperBtn
              bgColor={COLORS.bgColor}
              textColor={COLORS.white}
              textStyle={{fontSize: hp('2.3')}}
              onPress={values => handleSubmit(values)}>
              {isSignin ? 'Signin' : 'SignUp'}
            </PaperBtn>

            <PaperBtn
              textColor={COLORS.orangeTextColor}
              textStyle={{fontSize: hp('2.3')}}
              onPress={() => navigation.navigate('mainStack')}
              mode={'outlined'}
              containerStyle={{
                borderColor: COLORS.bgColor,
                marginTop: hp('4'),
              }}>
              Continue As Guest
            </PaperBtn>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  errorText: {
    color: COLORS.white,
    // marginBottom: 10,
  },
});
