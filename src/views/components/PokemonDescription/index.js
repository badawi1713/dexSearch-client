import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PokemonDescription = () => {
  return (
    <View style={styles.container}>
      <View style={styles.entryContainer}>
        <Text style={styles.entryText}>
          It has a preference for hot things. When it rains, steam is said to
          spout from the tip of its tail.
        </Text>
      </View>
      <Text style={styles.sourceText}>(Pokedéx entry from Pokémon Sword)</Text>
      <View style={styles.miscInfoContainer}>
        <View style={styles.miscInfoGroup}>
          <View style={styles.miscInfoItem}>
            <Text style={styles.miscInfoText}>2'00" (0.6 m)</Text>
          </View>
          <Text style={styles.miscInfoText}>Height</Text>
        </View>
        <View style={styles.miscInfoGroup}>
          <View style={styles.miscInfoItem}>
            <Text style={styles.miscInfoText}>18.7 lbs (8.5 kg)</Text>
          </View>
          <Text style={styles.miscInfoText}>Weight</Text>
        </View>
      </View>
    </View>
  );
};

export default PokemonDescription;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: '#fefefe',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  entryContainer: {
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fefefe',
    padding: 10,
    borderRadius: 8,
  },
  entryText: {
    textAlign: 'center',
    lineHeight: 20,
  },
  sourceText: {
    marginVertical: 12,
  },
  miscInfoContainer: {
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fefefe',
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  miscInfoGroup: {
    width: '48%',
  },
  miscInfoItem: {
    alignItems: 'center',
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fefefe',
    paddingHorizontal: 2,
    paddingVertical: 10,
    borderRadius: 8,
  },
  miscInfoText: {
    textAlign: 'center',
    fontSize: 13,
  },
});
