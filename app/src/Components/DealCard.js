import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import COLORS from '../../Config/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  RFValue,
} from 'react-native-responsive-screen';

const DealCard = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.tagsContainer}>
          {item.tags.map(tag => (
            <Text key={tag} style={styles.tag}>
              {tag}
            </Text>
          ))}
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DealCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.cardBgColor,
    borderRadius: 10,
    // overflow: 'hidden',
    marginBottom: 10,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    // paddingRight: 40
    // justifyContent : 'space-between'
  },
  image: {
    resizeMode: 'cover',
    width: wp(30),
    borderRadius: 10,
    height: hp(15),
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    color: COLORS.darkTextColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    color: '#ff6347',
    marginVertical: 5,
    fontWeight: '500',
    fontSize: 18,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: hp(1),
  },
  tag: {
    color: COLORS.darkTextColor,
    backgroundColor: '#FF572270',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 7,
    marginRight: 5,
    marginTop: 5,
    fontSize: 12,
  },
});
