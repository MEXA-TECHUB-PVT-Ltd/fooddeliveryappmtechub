import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, { useState, useEffect } from 'react';
import DealCard from './DealCard';
import uuid from 'react-native-uuid';

const Category = ({foods, categoryId}) => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        if (categoryId) {
            const filteredCategory = foods.filter(item => item.categoryIds.includes(categoryId));
            setCategory(filteredCategory);
        } else {
            // If categoryId is not provided, set the category to the entire foods array
            setCategory(foods);
        }
    }, [foods, categoryId]);

    return (
        <FlatList
            keyExtractor={() => uuid.v4()}
            data={category}
            renderItem={({item}) => <DealCard item={item} />}
        />
    );
};

export default Category;

const styles = StyleSheet.create({});
