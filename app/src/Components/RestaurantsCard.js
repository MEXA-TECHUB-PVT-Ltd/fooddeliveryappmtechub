import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
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
    <TouchableOpacity style={styles.restaurantItem}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.restaurantInfo}>
        <View style={{flexDirection : 'row', justifyContent:'space-between', alignItems: 'center'}} >
        <Text style={styles.tag}>{item.timing}</Text>
          
        </View>

  
        <Text style={styles.restaurantName}>{item.name}</Text>
      
        <Text style={styles.restaurantReviews}>{item.reviews}</Text>
      </View>
      <View style={{alignItems: 'center', gap: 7}} >
      <Text style={styles.restaurantRating}>
            <Icon
              source={'star'}
              size={wp(3.5)}
              color={'#FFCC00'}
            />{'  '}
            {item.rating}
          </Text>
      <IconButton
              icon={'chevron-right-circle-outline'}
              iconColor={COLORS.bgColor}
              size={20}
              onPress={handlePress}
              // style = {{marginTop: -10, padding: 0}}
            />

      </View>
        
    </TouchableOpacity>
  );
};

export default RestaurantsCard;

const styles = StyleSheet.create({
  restaurantItem: {
    backgroundColor: COLORS.white,
    borderRadius: 13,
    borderColor: COLORS.borderColor,
    borderWidth: 0.7,
    overflow: 'hidden',
    marginBottom: hp(1),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp(1.5),
  },
  image: {
    resizeMode: 'cover',
    width: wp(24),
    borderRadius: wp(2.5),
    height: hp(12),
  },
  restaurantInfo: {
    paddingHorizontal: wp(2),
    // paddingTop: wp(1),
    flex: 1,
    justifyContent: 'space-between'
  },
  tag: {
    color: COLORS.bgColor,
    backgroundColor: '#FF572240',
    borderRadius: wp(2.5),
    paddingVertical: hp(0.3),
    paddingHorizontal: wp(2),
    marginBottom: hp(0.5),
    fontSize: wp(3),
    width: wp(35),
    textAlign: 'center'
  },
  restaurantRating: {
    color: COLORS.grayTextColor,
  },
 
  restaurantName: {
    color: COLORS.darkTextColor,
    fontSize: wp(4),
    fontWeight: 'bold',
    marginVertical: hp(0.7)
  },
  restaurantReviews: {
    color: COLORS.grayTextColor,
  },
  
});
