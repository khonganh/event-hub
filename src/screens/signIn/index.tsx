import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Header from '~/components/header';
import MainLayout from '~/components/mainLayout';

interface SignInScreenProps {}

const SignInScreen = (props: SignInScreenProps) => {
  return (
    <MainLayout>
      <Header title="Sign In" canGoBack />
      <View style={styles.container}>
        <Text>SignInScreen</Text>
      </View>
    </MainLayout>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {},
});
