import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, { useState, useEffect } from 'react';
import DealCard from './DealCard';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';

const Category = ({foods, categoryId}) => {
    const [category, setCategory] = useState([]);

    let navigation = useNavigation()

    useEffect(() => {
        if (categoryId) {
            const filteredCategory = foods.filter(item => item.categoryIds.includes(categoryId));
            setCategory(filteredCategory);
        } else {
            // If categoryId is not provided, set the category to the entire foods array
            setCategory(foods);
        }
    }, [foods, categoryId]);

    const onDealCardPress = (item) => {
        navigation.navigate('itemDetails', {item: item});
      };

    return (
        <FlatList
            keyExtractor={() => uuid.v4()}
            data={category}
            renderItem={({item}) => <DealCard item={item} icon={'chevron-right-circle-outline'} handlePress={onDealCardPress}/>}
        />
    );
};

export default Category;

const styles = StyleSheet.create({});
