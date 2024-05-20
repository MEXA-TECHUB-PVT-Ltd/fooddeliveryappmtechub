import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import CustomHeader from '../../../Components/CustomHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  RFValue,
} from 'react-native-responsive-screen';
import DealCard from '../../../Components/DealCard';
import RestaurantsCard from '../../../Components/RestaurantsCard';

const NearBy = ({route, navigation}) => {
  let [restaurantScreen, setRestaurantScreen] = useState(false) ;

const [Data, setData] = useState([])

  useEffect(()=>{
    if ( route.params.id) {
      setRestaurantScreen(true)
    } else {
      setRestaurantScreen(false)
    }
    if (route.params?.Data) {
      setData(route.params.Data);
    }
  }, [route.params])


  const handleSearch  = () =>{

  }
  return (
    <View style={styles.container} >
      <CustomHeader heading={restaurantScreen ? 'Nearby Restaurant' : 'Nearby Deals'} right={'chevron-left'} rightOnpress={() => navigation.goBack()} iconSize={30} left={'magnify'}/>

    <View style={{paddingHorizontal: wp(6)}} >
      <FlatList  data={Data} renderItem={({item}) =>{
        return restaurantScreen? <RestaurantsCard item={item} /> : <DealCard item={item} />
        }} 
        ListFooterComponent={<View style={{height: hp(13)}} />}
        showsVerticalScrollIndicator = {false}
        />
        </View>
    </View>
  );
};

export default NearBy;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
