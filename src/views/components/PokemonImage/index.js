import React from 'react';

import {View, Image, StyleSheet} from 'react-native';

const PokemonImage = () => {
  return (
    <View style={styles.pokemonImageContainer}>
      <Image
        source={{
          uri:
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/16c93e3b-ce11-48da-a4a8-ad1dca9081ec/dmh4ei-666ff8b3-1e52-4318-93a8-50fa1f33ab6c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMTZjOTNlM2ItY2UxMS00OGRhLWE0YTgtYWQxZGNhOTA4MWVjXC9kbWg0ZWktNjY2ZmY4YjMtMWU1Mi00MzE4LTkzYTgtNTBmYTFmMzNhYjZjLnBuZyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl19.ufUohM5cRN27PC9Ir_qrxyUrS5lOsWiO85o2ifj9ExY',
        }}
        style={styles.backgroundImage}
      />
      <Image
        source={{
          uri: 'https://cdn.bulbagarden.net/upload/7/73/004Charmander.png',
        }}
        style={styles.pokemonImage}
      />
    </View>
  );
};

export default PokemonImage;

const styles = StyleSheet.create({
  pokemonImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
    height: 200,
  },
  backgroundImage: {
    width: 220,
    height: 220,
    opacity: 0.1,
    zIndex: -1,
    position: 'absolute',
  },
  pokemonImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});
