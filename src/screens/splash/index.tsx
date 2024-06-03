import * as React from 'react';
import {StyleSheet, ImageBackground, Image} from 'react-native';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('~/assets/images/background.png')}
      style={styles.container}>
      <Image
        source={require('~/assets/images/logo_horizontal.png')}
        style={styles.logo}
      />
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '80%',
    objectFit: 'contain',
  },
});
