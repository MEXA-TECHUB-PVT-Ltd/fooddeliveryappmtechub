import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SectionList,
  FlatList,
} from 'react-native';
import COLORS from '../../../../Config/Colors';
import HeadingCard from '../../../Components/HeadingCard';
import TxtInput from '../../../Components/TxtInput';
import RestaurantsCard from '../../../Components/RestaurantsCard';
import DealCard from '../../../Components/DealCard';
import {
  // nearByDeals,
  foodCategories,
  restaurants
} from '../../../../Config/Data';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const Discover = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState('Salad');
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
  }

  const shuffleCategories  = shuffle(restaurants.deals)
  
  const array = [1, 2, 3, 4, 5];
  console.log(shuffle(array)); // Output: A shuffled version of the array, e.g., [4, 1, 5, 3, 2]
  

  const [Data, setData] = useState([
    {
      title: 'Nearby Deals',
      data: shuffleCategories.slice(0, 2),
    },
    {
      title: 'NearBy Restaurants',
      data: restaurants,
    },
  ]);



  let seeAllonPress = (heading) => {
    if (heading.split(' ')[1] === 'Restaurants') {
      navigation.navigate('nearBy', {id: 'Restaurants', Data: restaurants});
    } else {
      navigation.navigate('nearBy', {Data: nearByDeals});
    }
  };

  return (
    <SectionList
      sections={Data}
      showsVerticalScrollIndicator={false}
      renderItem={({item, section}) => {
        switch (section.title) {
          case 'Nearby Deals':
            return <DealCard item={item} />;
          case 'NearBy Restaurants':
            return <RestaurantsCard restaurant={item} />;
        }
      }}
      maxToRenderPerBatch={2}
      style={styles.sectionList}
      ListHeaderComponent={
        <View style={styles.container}>
          <Text style={styles.headerText}>Let's find your favorite food!</Text>
          <TxtInput
            icon={'search'}
            iconColor={COLORS.darkTextColor}
            IconSize={20}
            placeholder={'Search'}
          />
          <View style={styles.categoryContainer}>
            <FlatList
              horizontal
              data={foodCategories}
              keyExtractor={item => item}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.categoryBtn,
                      selectedCategory === item && styles.selectedCategoryBtn,
                    ]}
                    onPress={() => setSelectedCategory(item)}>
                    <Text
                      style={[
                        styles.categoryText,
                        selectedCategory === item && styles.selectedCategoryText,
                      ]}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      }
      renderSectionHeader={({section}) => (
        <HeadingCard btnTxt={'See All'} heading={section.title} onpress={seeAllonPress.bind(this, section.title)} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: hp(2.5),
    color: COLORS.darkTextColor,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: hp(2.5),
  },
  categoryBtn: {
    backgroundColor: COLORS.cardBgColor,
    borderRadius: 25,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(5),
    marginHorizontal: wp(1),
  },
  selectedCategoryBtn: {
    backgroundColor: COLORS.orangeTextColor,
  },
  categoryText: {
    color: COLORS.darkTextColor,
    fontSize: 14,
  },
  selectedCategoryText: {
    color: COLORS.white,
    fontSize: 14,
  },
  sectionList: {
    paddingHorizontal: wp(5),
    backgroundColor: COLORS.white
  }
});

export default Discover;
