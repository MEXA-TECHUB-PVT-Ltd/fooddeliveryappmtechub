import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Icon, IconButton} from 'react-native-paper';
import COLORS from '../../../../Config/Colors';
import PaperBtn from '../../../Components/PaperButton';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useState} from 'react';
import Appetizers from '../../../Components/RestaurantTabs.js/Appetizers';
import Desserts from '../../../Components/RestaurantTabs.js/Desserts';
import Beverages from '../../../Components/RestaurantTabs.js/Beverages';
import MainCourses from '../../../Components/RestaurantTabs.js/Main Courses';
import All from '../../../Components/RestaurantTabs.js/All';

const RestaurantDetail = ({route, navigation}) => {
  const [index, setIndex] = useState(0);

  const {item} = route.params;
  const restaurantInfo = item.info;

  const restaurantCategories = restaurantInfo.categories.map((item) =>{
    return {
      key : item.id.toString(),
      title : item.name
    }
  })

  restaurantCategories.unshift({key : 'all' , title: 'All'})
  console.log(restaurantCategories);

  

  const foods = item.food

  // console.log(foods);

  // console.log(restaurantCategories);

  const [routes] = useState(restaurantCategories);
  
  // console.log(routes[index]);
  
  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'all': 
      return <All foods = {foods} />
      case '1':
        return <Appetizers foods = {foods} categoryId = {Number(route.key)} />;
      case '2':
        return <MainCourses foods = {foods} categoryId = {Number(route.key)} />;
        case '3' :
          return <Desserts foods = {foods} categoryId = {Number(route.key)} />;
        case '4' :
          return <Beverages foods = {foods} categoryId = {Number(route.key)} />;
      default: 
        return null
    }
  };
  
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
      renderLabel={({route, focused})=>(
        <Text style={[focused && {color:COLORS.bgColor, fontWeight: '700' }, ]} >{route.title}</Text>
  )}
      scrollEnabled
    />
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: restaurantInfo.image}}
        style={styles.image}>
        <IconButton
          icon={'chevron-left'}
          iconColor={COLORS.white}
          size={35}
          style={styles.iconbtnStyle}
          onPress={() => navigation.goBack()}
        />
      </ImageBackground>
      <View style={styles.restaurantInfoContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.restaurantName}>{restaurantInfo.name}</Text>
          <TouchableOpacity style={styles.restaurantRating}>
            <Icon source={'star'} size={wp(5)} color={'#FFCC00'} />
            <Text style={styles.ratingTxt}>{restaurantInfo.rating}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.locationContainer}>
          <Icon source={'map-marker-radius'} color={COLORS.bgColor} size={18} />
          <Text style={styles.locationTxt}>{restaurantInfo.location}</Text>
        </View>
        <Text style={styles.description}>
          {restaurantInfo.smallDescription}
        </Text>
        <View style={styles.btnView}>
          <PaperBtn
            mode={'outlined'}
            containerStyle={styles.btnContainer}
            textColor={COLORS.bgColor}>
            Chinese
          </PaperBtn>
          <PaperBtn
            mode={'outlined'}
            containerStyle={[
              styles.btnContainer,
              {paddingHorizontal: wp(8), marginLeft: wp(4)},
            ]}
            textColor={COLORS.bgColor}>
            00000000000
          </PaperBtn>
        </View>
      </View>

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        lazy
        // lazyPreloadDistance={1}
        // initialLayout={{width: wp('100%')}}
      />
    </View>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: wp('100%'),
    height: wp('70%'),
  },
  iconbtnStyle: {
    margin: hp(1),
  },
  restaurantInfoContainer: {
    margin: wp(6),
    justifyContent: 'space-between',
    // flex: 1,
    height: hp(22),
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  restaurantName: {
    color: COLORS.bgColor,
    fontSize: hp(3),
    fontWeight: '700',
  },
  restaurantRating: {
    flexDirection: 'row',
  },
  ratingTxt: {
    fontSize: hp(2),
    fontWeight: '500',
    marginLeft: wp(1),
  },
  locationContainer: {
    flexDirection: 'row',
  },
  locationTxt: {
    color: COLORS.grayTextColor,
    marginLeft: wp(3),
    fontSize: wp(3.6),
    fontWeight: '500',
  },
  description: {
    color: COLORS.darkTextColor,
  },
  btnView: {
    flexDirection: 'row',
  },
  btnContainer: {
    borderColor: COLORS.bgColor,
    borderWidth: 2,
    borderRadius: 30,
  },

  tabbar: {
    backgroundColor: 'white',
  },
  tab: {
    width: 'auto',
    paddingHorizontal: 20,
  },
  label: {
    color: 'gray',
    fontWeight: '400',
  },
  indicator: {
    backgroundColor: 'orange',
    height: 2,
  },
});
