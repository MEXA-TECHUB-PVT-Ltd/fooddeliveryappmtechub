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
import {TextInput} from 'react-native-paper';

const SignIn = ({navigation, route}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSignin, setIsSignin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  useLayoutEffect(() => {
    route.params?.navigateTo === 'signIn'
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

  let obj = {
    mode: 'flat',
    underlineColor: COLORS.bgColor,
    activeUnderlineColor: COLORS.orangeTextColor,
    style: styles.textInput,
    selectionColor: COLORS.orangeTextColor,
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image
          source={require('../../assets/Bg_Imgs/SignInbgimg.png')}
          style={styles.img}
          resizeMode="contain"
        />
        <PaperBtn
          textColor={COLORS.bgColor}
          containerStyle={styles.topBtn}
          mode={'outlined'}
          onPress={() =>
            isSignin
              ? navigation.replace('signIn', {navigateTo: 'signUp'})
              : navigation.replace('signIn', {navigateTo: 'signIn'})
          }>
          {isSignin ? 'Sign Up' : 'Sign In'}
        </PaperBtn>
      </View>

      <Formik
        initialValues={{email: '', password: '', phone: ''}}
        validationSchema={validationFunction}
        onSubmit={handleSubmit}>
        {({handleChange, handleSubmit, values, touched, errors}) => (
          <View style={{padding: hp(3), marginBottom: 50}}>
            <Text style={styles.heading}>
              {isSignin ? 'Sign In' : 'Sign Up'}
            </Text>

            <View
              style={{marginVertical: hp(4), justifyContent: 'space-between'}}>
              {isSignup && (
                <TextInput {...obj} placeholder="Username (Optional)" />
              )}
              <TextInput
                placeholder="Email Address"
                value={values.email}
                {...obj}
                onChangeText={handleChange('email')}
                style={[styles.textInput, {marginVertical: hp('3')}]}
              />
              {touched.email && errors.email && (
                <Text
                  style={[
                    styles.errorText,
                    isSignin
                      ? styles.errorText.email
                      : styles.errorText.SignUpEmail,
                  ]}>
                  {errors.email}
                </Text>
              )}

              {isSignin && (
                <TextInput
                  {...obj}
                  placeholder={'Enter Password'}
                  secureTextEntry={isVisible}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  right={
                    <TextInput.Icon
                      icon="eye"
                      onPress={() => setIsVisible(prev => !prev)}
                    />
                  }
                />
              )}
              {isSignin && touched.password && errors.password && (
                <Text
                  style={[
                    styles.errorText,
                    isSignin
                      ? styles.errorText.password
                      : styles.errorText.SignUpassword,
                  ]}>
                  {errors.password}
                </Text>
              )}

              {isSignup && (
                <TextInput
                  {...obj}
                  placeholder={'Phone Number'}
                  keyboardType={'numeric'}
                  value={isSignin ? values.password : values.phone}
                  onChangeText={handleChange('phone')}
                />
              )}

              {isSignup && touched.phone && errors.phone && (
                <Text style={[styles.errorText]}>{errors.phone}</Text>
              )}
            </View>
            <PaperBtn
              bgColor={COLORS.bgColor}
              textColor={COLORS.white}
              textStyle={{fontSize: hp('2.3')}}
              onPress={values => {
                handleSubmit(values);
                isSignin
                  ? navigation.navigate('mainStack')
                  : navigation.navigate('verification');
              }}>
              {isSignin ? 'Sign In' : 'Sign Up'}
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
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingBottom: hp(5),
  },
  imgContainer: {
    flexDirection: 'row',
    paddingRight: 100,
    position: 'relative',
  },
  img: {
    width: wp('80%'),
    height: hp('39%'),
  },
  topBtn: {
    position: 'absolute',
    borderColor: COLORS.bgColor,
    borderWidth: 1,
    top: hp(2),
    right: hp(0.7),
  },
  heading: {
    color: COLORS.orangeTextColor,
    fontSize: hp('4'),
    fontWeight: '600',
    textAlign: 'center',
  },
  textInput: {
    backgroundColor: COLORS.inputBgColor,
    height: hp('6'),
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // paddingVertical: hp('0.5')
  },
  errorText: {
    color: COLORS.error,
    email: {
      top: 70,
      left: 5,
      position: 'absolute',
    },
    SignUpEmail: {
      top: 110,
      left: 5,
      position: 'absolute',
    },
    password: {
      padding: 3,
    },
  },
});
