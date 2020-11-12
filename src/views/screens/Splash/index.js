import React, {useEffect} from 'react';
import {Text, Image, StyleSheet, SafeAreaView} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../../assets/images/pokemon-logo.png')}
        style={styles.imageLogo}
      />
      <Text style={styles.textLogo}>DexSearch</Text>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLogo: {
    width: 220,
    height: 220,
    marginBottom: 20,
  },
  textLogo: {
    fontSize: 18,
    fontWeight: '700',
  },
});
