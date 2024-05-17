import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import COLORS from '../../Config/Colors';
import {Icon} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  RFValue,
} from 'react-native-responsive-screen';

const RestaurantsCard = ({item}) => {
  return (
    <View style={styles.restaurantItem}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <Text style={styles.restaurantReviews}>{item.reviews}</Text>
        <Text style={styles.restaurantRating}>
          <Icon source={'star'} size={15} color={COLORS.orangeTextColor} />{' '}
          {item.rating}
        </Text>
      </View>
    </View>
  );
};

export default RestaurantsCard;

const styles = StyleSheet.create({
  restaurantItem: {
    flexDirection: 'row',
    backgroundColor: COLORS.cardBgColor,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    resizeMode: 'cover',
    width: wp(30),
    borderRadius: 10,
    height: hp(15),
  },
  restaurantInfo: {
    padding: 10,
    flex: 1,
  },
  restaurantName: {
    color: COLORS.darkTextColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  restaurantReviews: {
    color: COLORS.grayTextColor,
    marginVertical: 5,
  },
  restaurantRating: {
    color: COLORS.orangeTextColor,
  },
});
