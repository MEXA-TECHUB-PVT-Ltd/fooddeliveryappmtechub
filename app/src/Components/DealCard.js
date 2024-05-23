import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../../Config/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PaperBtn from './PaperButton';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import uuid from 'react-native-uuid';
import CustomButton from './CustomButton';


const DealCard = ({item, onPress, icon, incrementQuantity, decrementQuantity}) => {
  // console.log(item);

  const [count, setCount] = useState(0)
  // let cartitem = !!onPress
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('itemDetails', {item: item});
    // console.log(cartitem);
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.infoContainer}>
        {!onPress && (
          <View style={styles.tagsContainer}>
            {item.tags.map(tag => (
              <Text key={uuid.v4()} style={styles.tag}>
                {tag}
              </Text>
            ))}
          </View>
        )}

        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.price}>{item.price}</Text>

       {
        onPress && <View style={{flexDirection: 'row', alignItems: 'center',}} >
        <CustomButton icon={'minus'} iconSize={wp(3.5)} iconColor={COLORS.bgColor}  containerStyle={styles.quantityBtn} onPress={()=>decrementQuantity(item.id)} /> 
        <Text style={{marginHorizontal: hp(1)}} >{item.quantity}</Text> 
        <CustomButton icon={'plus'} iconSize={wp(3.5)} iconColor={COLORS.white} bgColor={COLORS.bgColor} containerStyle={styles.quantityBtn} onPress={()=>incrementQuantity(item.id)} />  
        </View> 
        }
      </View>
      <IconButton
        icon={icon}
        iconColor={COLORS.bgColor}
        size={20}
        onPress={() => (onPress ? onPress(item.id) : handlePress)}
      />
    </TouchableOpacity>
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
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp(1),
    // height: hp
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
    marginVertical: hp(0.7),
    // backgroundColor: COLORS.darkTextColor,
  },
  price: {
    color: COLORS.bgColor,
    fontWeight: '500',
    fontSize: wp(5),
  },
  tagsContainer: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    // marginBottom: hp(1),
  },
  quantityBtn : {borderRadius: 2, padding: 2, borderColor:COLORS.bgColor, borderWidth: 1}
});
