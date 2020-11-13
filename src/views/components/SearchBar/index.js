import React from 'react';
import {SafeAreaView, View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const SearchBar = ({searchHandler, searchValue}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchGroup}>
        <TextInput
          onChangeText={(text) => searchHandler(text.capitalize())}
          style={styles.searchInput}
          placeholder="Search"
          value={searchValue}
        />
        <Icon name="search" size={18} style={styles.searchIcon} />
      </View>
    </SafeAreaView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 80,
    backgroundColor: '#F08030',
    paddingHorizontal: 24,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  searchGroup: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: '#FAFAFA',
    width: '100%',
    borderRadius: 8,
    paddingLeft: 20,
    paddingRight: 40,
  },
  searchIcon: {
    zIndex: 1,
    position: 'absolute',
    right: 16,
    color: '#9b9b9b',
  },
});
