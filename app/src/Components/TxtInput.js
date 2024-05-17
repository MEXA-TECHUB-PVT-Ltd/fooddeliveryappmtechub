import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import COLORS from '../../Config/Colors'
import Icon from 'react-native-vector-icons/Ionicons';


const TxtInput = ({style, icon, placeholder, IconSize, iconColor}) => {
  return (
    <View style={[styles.searchContainer, style]}>
    <Icon name={icon} size={IconSize} color={iconColor} />
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={COLORS.black}
      style={styles.searchInput}
    />
  </View>
  )
}

export default TxtInput

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 25,
        paddingHorizontal: 10,
        marginBottom: 20,
      },
      searchInput: {
        color: COLORS.black,
        marginLeft: 5,
        flex: 1,
      },
})