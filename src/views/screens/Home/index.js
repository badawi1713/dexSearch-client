import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import SearchBar from '../../components/SearchBar';
import PokemonImage from '../../components/PokemonImage';
import PokemonName from '../../components/PokemonName';
import PokemonDescription from '../../components/PokemonDescription';

import {globalStyles} from '../../../assets/styles/GlobalStyles';

const Home = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <SearchBar />
      <ScrollView style={styles.contentContainer}>
        <PokemonImage />
        <PokemonName />
        <PokemonDescription />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 24,
  },
});
