import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import MainLayout from '~/components/mainLayout';
import Space from '~/components/space';

const SignInScreen = () => {
  return (
    <MainLayout>
      <Space height={20} />
      <Image
        style={styles.logo}
        source={require('~/assets/images/logo_vertical.png')}
      />
    </MainLayout>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  logo: {
    height: 114,
    objectFit: 'contain',
    alignSelf: 'center',
  },
});
