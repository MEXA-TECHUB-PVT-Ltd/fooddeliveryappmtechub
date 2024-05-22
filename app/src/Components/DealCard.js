import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import COLORS from '../../Config/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PaperBtn from './PaperButton';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';


const DealCard = ({ item, onPress }) => {

  // console.log(item);

  const navigation = useNavigation()
  const handlePress = () => {
    navigation.navigate('itemDetails', {item: item})
  };
  return (
    <View style={styles.container}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.infoContainer}>
          <View style={styles.tagsContainer}>
            {item.tags.map(tag => (
              <Text key={uuid.v4()} style={styles.tag}>
                {tag}
              </Text>
            ))}
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.price}</Text>
            <IconButton
              icon={'chevron-right-circle-outline'}
              iconColor={COLORS.bgColor}
              size={20}
              onPress={handlePress}
              style = {{marginTop: -4, padding: 0 }}

              // textColor={COLORS.bgColor}
              // textStyle={{ color: COLORS.bgColor }}
            />
          </View>
        </View>
    </View>
  );
};

export default DealCard;

const styles = StyleSheet.create({
  container: {
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
    padding: wp(1),
  },
  image: {
    resizeMode: 'cover',
    width: wp(24),
    borderRadius: 10,
    height: hp(12),
  },
  infoContainer: {
    paddingHorizontal: wp(1.5),
    flex: 1,
  },
  tag: {
    color: COLORS.bgColor,
    backgroundColor: '#FF572240',
    borderRadius: 10,
    paddingVertical: hp(0.3),
    paddingHorizontal: wp(2),
    marginRight: wp(1),
    marginTop: hp(0.5),
    fontSize: wp(3),
  },
  title: {
    color: COLORS.darkTextColor,
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    // backgroundColor: COLORS.grayTextColor,
    // marginVertical: -2
  },
  price: {
    color: '#ff6347',
    fontWeight: '500',
    fontSize: wp(4),
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: hp(1),
  },
 
});
