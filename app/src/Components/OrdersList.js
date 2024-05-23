import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { ordersArray } from '../../Config/Data'
import { useState } from 'react'
import OrderCard from './OrderCard'

const OrdersList = ({status}) => {

    const [orders, setOrders] = useState(ordersArray)

    useEffect(()=>{

      if (status) {
        let filteredOrders = orders.filter((item)=> item.status === status)
        setOrders(filteredOrders)
      }

    },[status])
    // console.log(status);

    
  return (
    <SafeAreaView>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderCard order={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )
}

export default OrdersList

const styles = StyleSheet.create({})