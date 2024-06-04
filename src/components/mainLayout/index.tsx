import {useTheme} from '@react-navigation/native';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';

const MainLayout = (props: React.PropsWithChildren<SafeAreaViewProps>) => {
  const {children, ...rest} = props;
  const {colors} = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}
      {...rest}>
      {children}
    </SafeAreaView>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
