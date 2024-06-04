import * as React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Image,
  ActivityIndicator,
} from 'react-native';
import Space from '~/components/space';
import {appColors} from '~/constants/appColors';
import {screenName} from '~/constants/screenName';
import {navigate} from '~/services/navigationService';

const SplashScreen = () => {
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate(screenName.ONBOARD_SCREEN);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <ImageBackground
      source={require('~/assets/images/background.png')}
      style={styles.container}>
      <Image
        source={require('~/assets/images/logo_horizontal.png')}
        style={styles.logo}
      />
      <Space height={8} />
      <ActivityIndicator color={appColors.primary} animating />
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
