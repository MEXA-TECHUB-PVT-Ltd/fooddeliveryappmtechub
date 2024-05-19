import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  SectionList,
} from 'react-native';
import COLORS from '../../../../Config/Colors';
import HeadingCard from '../../../Components/HeadingCard';
// import NearByDeals from '../mainStack/NearByDeals';
// import DealsList from '../../../Components/DealsList';
import TxtInput from '../../../Components/TxtInput';
import RestaurantsCard from '../../../Components/RestaurantsCard';
import DealCard from '../../../Components/DealCard';
import {
  nearByDeals,
  nearByRestaurants,
  foodCategories,
} from '../../../../Config/Data';

const Data = [
  {
    title: 'Nearby Deals',
    data: nearByDeals.slice(0, 2),
  },
  {
    title: 'NearBy Restaurants',
    data: nearByRestaurants,
  },
];

const Discover = () => {
  const [selectedCategory, setSelectedCategory] = useState('Salad');

  return (
    <SectionList
      sections={Data}
      showsVerticalScrollIndicator={false}
      renderItem={({item, section}) => {
        switch (section.title) {
          case 'Nearby Deals':
            return <DealCard item={item} />;
          case 'NearBy Restaurants':
            return <RestaurantsCard item={item} />;
        }
      }}
      maxToRenderPerBatch={2}
      style={{paddingHorizontal: 10, backgroundColor: COLORS.white}}
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
                      selectedCategory === item && styles.selectedcategoryBtn,
                    ]}
                    onPress={() => setSelectedCategory(item)}>
                    <Text
                      style={[
                        styles.categoryText,
                        selectedCategory === item &&
                          styles.selectedCategoryText,
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
        <HeadingCard btnTxt={'See All'} heading={section.title} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    // paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: COLORS.darkTextColor,
  },

  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  categoryBtn: {
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  selectedcategoryBtn: {
    backgroundColor: COLORS.orangeTextColor,
  },
  categoryText: {
    color: COLORS.darkTextColor,
  },
  selectedCategoryText: {
    color: COLORS.white,
  },
});

export default Discover;
