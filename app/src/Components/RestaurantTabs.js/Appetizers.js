import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DealCard from '../DealCard'

const Appetizers = ({foods, categoryId}) => {
  // console.log(foods);

  let appetizers = foods.filter((item)=>{
      if (item.categoryIds.indexof(categoryId) >= 0) {
        return true
      } else {
        return false
      } 
    })
  



  return (
    <FlatList data={appetizers} renderItem={({item})=>{
      return(
        <DealCard item={item}/>
      )
    }} />
  )
}

export default Appetizers

const styles = StyleSheet.create({})