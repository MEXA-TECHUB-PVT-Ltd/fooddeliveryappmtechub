import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import COLORS from '../../../../Config/Colors';

const SearchScreen = ({ navigation }) => {
  const topSearches = [
    { id: '1', text: 'Lorem ipsum dolor sit amet, consectetur a' },
    { id: '2', text: 'Lorem ipsum dolor sit amet, consectetur a' },
    { id: '3', text: 'Lorem ipsum dolor sit amet, consectetur a' },
    { id: '4', text: 'Lorem ipsum dolor sit amet, consectetur a' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <IconButton icon="chevron-left" size={30} iconColor={COLORS.bgColor} onPress={() => navigation.goBack()} />
        <TextInput style={styles.searchInput} placeholder="Search here" />
      </View>
      <Text style={styles.topSearches}>Top searches</Text>
      <FlatList
        data={topSearches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.searchItem}>
            <Text style={{fontWeight: '500'}} >{item.text}</Text>
            <IconButton icon="close" size={20} iconColor={COLORS.bgColor} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  searchInput: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    borderRadius: 8,
    padding: 8,
  },
  topSearches: {
    marginTop: 16,
    fontWeight: 'bold',
    color: COLORS.bgColor,
  },
  searchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
});

export default SearchScreen;
