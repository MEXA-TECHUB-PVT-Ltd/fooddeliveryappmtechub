import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, { useState, useEffect } from 'react';
import DealCard from './DealCard';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';
import PaperBtn from './PaperButton';
import COLORS from '../../Config/Colors';

const Category = ({foods, categoryId}) => {
    const [category, setCategory] = useState([]);

    const navigation = useNavigation()

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
            ListFooterComponent={<View style={styles.ListFooterComponent} >
                <PaperBtn containerStyle={styles.btn} textStyle={styles.btnTextColor} >Add Complaint</PaperBtn>
                <PaperBtn containerStyle={styles.btn} textStyle={styles.btnTextColor}  >Rate</PaperBtn>
            </View>}
        />
    );
};

export default Category;

const styles = StyleSheet.create({
    ListFooterComponent:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        // flex: 1
    },
    btn:{
        backgroundColor: COLORS.bgColor,
        padding: 3

    },
    btnTextColor:{
        color: COLORS.white
    }
});
