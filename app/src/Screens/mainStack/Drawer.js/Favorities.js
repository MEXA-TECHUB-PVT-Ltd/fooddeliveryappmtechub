import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import CustomHeader from '../../../Components/CustomHeader'
import CustomTabView from '../../../Components/CustomTabView'
import { restaurants } from '../../../../Config/Data'
import { FlatList } from 'react-native-gesture-handler'
import SubFavorites from '../../../Components/SubFavorites'


const Favorities = ({navigation}) => {
    
  const foodArray = restaurants.flatMap(restaurant => {
    return restaurant.food;
  });

  const dealsArray = restaurants.flatMap(restaurant => {
    return restaurant.deals;
  });
  
//   console.log(foodArray);


  const [routes] = useState([
    { key: 'items', title : 'Items '},
    { key: 'deals', title : 'Deals '},
    { key: 'restaurant', title : 'Restaurants '},
 ])

 
  const renderScene = ({route}) => {
    switch (route.key){
        case 'items' : 
        return <SubFavorites route={route.key} />
        case 'deals' : 
        return <SubFavorites route={route.key}/>
        case 'restaurants' : 
            return <SubFavorites route={route.key}  />
        default:
            return null;
    }
  }
  return (
    <View>
      <CustomHeader
        heading={'My Favorites'}
        iconSize={30}
        left={'chevron-left'}
        leftOnpress={() => navigation.goBack()}
      />
      <FlatList data={foodArray}  />

    </View>
  )
}

export default Favorities

const styles = StyleSheet.create({})