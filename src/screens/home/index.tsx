import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MainLayout from '~/components/mainLayout';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text>HomeScreen</Text>
      </View>
    </MainLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
});
