import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card, Title, Divider } from 'react-native-paper';
import COLORS from '../../Config/Colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';


  const OrderCard = ({ order }) => {
    return (
        <Card style={styles.card}>
            <Card.Content>
                <View style={styles.header}>
                    <Title style={styles.title}>{order.orderNumber}</Title>
                    <View style={styles.statusContainer}>
                        <Text style={styles.statusText}>{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</Text>
                    </View>
                </View>
                <Text style={styles.timestamp}>{new Date(order.timestamp).toLocaleString()}</Text>
                <Divider style={styles.divider} />
                <Text style={styles.heading}>Items:</Text>
                {order.items.map((item, index) => (
                    <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
                        <Image source={{ uri: item.image }} style={styles.itemImage} />
                        <Text style={styles.itemText}>
                            {item.name} <Text style={{color: COLORS.bgColor}} >x </Text>{item.quantity}
                        </Text>
                    </View>
                ))}
                <Divider style={styles.divider} />
                <Text style={styles.heading}>Total Amount:</Text>
                <Text style={styles.totalAmount}>${order.totalAmount.toFixed(2)}</Text>
                <Text style={styles.heading}>Delivery Address:</Text>
                <Text style={styles.address}>{order.deliveryAddress}</Text>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        borderRadius: 8,
        backgroundColor: COLORS.white,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.bgColor,
    },
    statusContainer: {
        backgroundColor: '#FF5722',
        borderRadius: wp(2),
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    statusText: {
        color: COLORS.white,
        fontSize: 14,
        fontWeight: 'bold',
    },
    timestamp: {
        fontSize: 12,
        color: COLORS.grayTextColor,
        fontWeight: '500',
    },
    divider: {
        marginVertical: 10,
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        color: COLORS.bgColor,
    },
    itemText: {
        fontSize: 16.5,
        marginHorizontal: 10,
        color: COLORS.darkTextColor,
        fontWeight: '500',
    },
    itemImage: {
        width: wp(24),
        height: hp(12),
        borderRadius: wp(5),
        resizeMode: 'cover',
    },
    totalAmount: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
        
    },
    address: {
        fontSize: 14,
        color: '#555',
    },
});

export default OrderCard;