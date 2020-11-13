import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {SafeAreaView, StyleSheet, ScrollView, Text} from 'react-native';

import SearchBar from '../../components/SearchBar';
import PokemonImage from '../../components/PokemonImage';
import PokemonName from '../../components/PokemonName';
import PokemonDescription from '../../components/PokemonDescription';

import {globalStyles} from '../../../assets/styles/GlobalStyles';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const searchPokemon = async () => {
      const res = await axios.get(
        `http://192.168.100.32:5000/api/v1/pokemon/search?name=${searchValue}`,
      );
      try {
        setPokemonData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (searchValue) {
      searchPokemon();
    } else {
      setPokemonData([]);
    }
  }, [searchValue]);

  const searchHandler = (text) => {
    if (text) {
      setSearchValue(text);
    } else {
      setSearchValue(text);
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <SearchBar searchHandler={searchHandler} searchValue={searchValue} />
      {pokemonData.length !== 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.contentContainer}>
          <PokemonImage image={pokemonData.image} />
          <PokemonName
            name={pokemonData.name}
            number={pokemonData.number}
            species={pokemonData.species}
            primaryType={pokemonData.primaryType}
            secondaryType={pokemonData.secondaryType}
          />
          <PokemonDescription
            pokedexEntry={pokemonData.pokedexEntry}
            pokedexSource={pokemonData.pokedexSource}
            height={pokemonData.height}
            weight={pokemonData.weight}
          />
        </ScrollView>
      ) : (
        <Text>Search Pokemon</Text>
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 24,
  },
});
