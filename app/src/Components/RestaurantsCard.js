import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import COLORS from '../../Config/Colors';
import {Icon, IconButton} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const RestaurantsCard = ({restaurant}) => {

  const item = restaurant.info

  const navigation = useNavigation()
  const handlePress = () => {
    navigation.navigate('restaurantDetail', {item: restaurant})
  };
  return (
    <View style={styles.restaurantItem}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.restaurantInfo}>
        <View style={{flexDirection : 'row', justifyContent:'space-between', alignItems: 'center'}} >
        <Text style={styles.tag}>{item.timing}</Text>
          <Text style={styles.restaurantRating}>
            <Icon
              source={'star'}
              size={wp(3.5)}
              color={'#FFCC00'}
            />{'  '}
            {item.rating}
          </Text>
        </View>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <View style={styles.reviewContainer} >
        <Text style={styles.restaurantReviews}>{item.reviews}</Text>
        <IconButton
              icon={'chevron-right-circle-outline'}
              iconColor={COLORS.bgColor}
              size={20}
              onPress={handlePress}
              style = {{marginTop: -10, padding: 0}}
              // textColor={COLORS.bgColor}
              // textStyle={{ color: COLORS.bgColor }}
            />
        </View>
        
      </View>
    </View>
  );
};

export default RestaurantsCard;

const styles = StyleSheet.create({
  restaurantItem: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderColor: COLORS.borderColor,
    borderWidth: 0.7,
    borderRadius: wp(2.5),
    overflow: 'hidden',
    marginBottom: hp(1),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: hp(0.1)},
    shadowOpacity: 0.3,
    shadowRadius: wp(1),
    elevation: 2,
    padding: wp(1),
  },
  image: {
    resizeMode: 'cover',
    width: wp(24),
    borderRadius: wp(2.5),
    height: hp(12),
  },
  restaurantInfo: {
    paddingHorizontal: wp(2),
    paddingTop: wp(1),
    flex: 1,
    justifyContent: 'space-between'
  },
  tag: {
    color: COLORS.bgColor,
    backgroundColor: '#FF572240',
    borderRadius: wp(2.5),
    paddingVertical: hp(0.3),
    paddingHorizontal: wp(2),
    marginVertical: hp(0.5),
    fontSize: wp(3),
    width: wp(35),
    textAlign: 'center'
  },
  restaurantRating: {
    color: COLORS.orangeTextColor,
  },
  restaurantName: {
    color: COLORS.darkTextColor,
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  reviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  restaurantReviews: {
    color: COLORS.grayTextColor,
  },
  
});
