import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface LoadingProps {}

const Loading = (props: LoadingProps) => {
  return (
    <View style={styles.container}>
      <Text>Loading</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {},
});
