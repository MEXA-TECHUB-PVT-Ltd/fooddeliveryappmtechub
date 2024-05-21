import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import DealCard from '../DealCard'

const All = ({foods}) => {
    console.log(foods);

    const renderFunction = ({item}) =>{
        return(
            <DealCard item={item} />
        )
    }
  return (
    <View>
      <Text>All</Text>
      <FlatList data={foods} renderItem={renderFunction} />
    </View>
  )
}

export default All

const styles = StyleSheet.create({}) 