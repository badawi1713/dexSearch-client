import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PokemonName = ({name, number, species, primaryType, secondaryType}) => {
  return (
    <View>
      <View style={styles.nameGroup}>
        <Text style={styles.nameGroupText}>{name}</Text>
        <Text style={styles.nameGroupText}>#{number}</Text>
      </View>
      <Text style={styles.speciesText}>{species}</Text>
      <View style={styles.typeGroup}>
        {secondaryType ? (
          <>
            <View style={styles.typeGroupDoublePrimary}>
              <Text style={styles.typeGroupText}>{primaryType}</Text>
            </View>
            <View style={styles.typeGroupDoubleSecondary}>
              <Text style={styles.typeGroupText}>{secondaryType}</Text>
            </View>
          </>
        ) : (
          <View style={styles.typeGroupSingle}>
            <Text style={styles.typeGroupText}>{primaryType}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default PokemonName;

const styles = StyleSheet.create({
  nameGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameGroupText: {
    fontSize: 18,
  },
  speciesText: {
    alignSelf: 'center',
    marginVertical: 12,
  },
  typeGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'space-between',
    width: '100%',
  },
  typeGroupSingle: {
    padding: 10,
    width: '100%',
    backgroundColor: '#F08030',
    alignSelf: 'center',
    borderRadius: 8,
    alignItems: 'center',
  },
  typeGroupDoublePrimary: {
    padding: 10,
    width: '45%',
    backgroundColor: '#F08030',
    alignSelf: 'center',
    borderRadius: 8,
    alignItems: 'center',
  },
  typeGroupDoubleSecondary: {
    padding: 10,
    width: '45%',
    backgroundColor: '#C6C1B7',
    alignSelf: 'center',
    borderRadius: 8,
    alignItems: 'center',
  },
  typeGroupText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FAFAFA',
  },
});
