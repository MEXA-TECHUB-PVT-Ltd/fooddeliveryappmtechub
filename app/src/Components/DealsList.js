// This Component is not in use anywhere within this app

import {StyleSheet, FlatList} from 'react-native';
import React from 'react';
import DealCard from './DealCard';

const DealsList = ({Deals}) => {
  return (
    <FlatList
      horizontal
      data={Deals}
      renderItem={({item}) => {
        return <DealCard item={item} />;
      }}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default DealsList;

const styles = StyleSheet.create({});
