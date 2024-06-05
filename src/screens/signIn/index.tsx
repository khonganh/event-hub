import * as React from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import MainLayout from '~/components/mainLayout';
import Space from '~/components/space';
import TextComponent from '~/components/text';

const SignInScreen = () => {
  return (
    <MainLayout>
      <ScrollView style={styles.container}>
        <Image
          style={styles.logo}
          source={require('~/assets/images/logo_vertical.png')}
        />
        <TextComponent title text="Sign in" fontWeight="500" />
      </ScrollView>
    </MainLayout>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 24,
  },
  logo: {
    height: 114,
    objectFit: 'contain',
    alignSelf: 'center',
  },
});
