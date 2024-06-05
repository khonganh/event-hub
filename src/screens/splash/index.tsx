import * as React from 'react';
import {ActivityIndicator, ImageBackground, StyleSheet} from 'react-native';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';
import Space from '~/components/space';
import {appColors} from '~/constants/appColors';

const SplashScreen = () => {
  const opacity = useSharedValue(1);

  React.useEffect(() => {
    opacity.value = withTiming(0, {duration: 1500});
  }, [opacity]);

  return (
    <ImageBackground
      source={require('~/assets/images/background.png')}
      style={[styles.container]}>
      <Animated.Image
        source={require('~/assets/images/logo_horizontal.png')}
        style={[styles.logo, {opacity: opacity}]}
      />
      {/* <Space height={8} /> */}
      {/* <ActivityIndicator color={appColors.primary} animating /> */}
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
