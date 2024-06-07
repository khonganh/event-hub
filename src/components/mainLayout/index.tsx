import * as React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';
import {appColors} from '~/constants/appColors';

const MainLayout = (props: React.PropsWithChildren<SafeAreaViewProps>) => {
  const {children, ...rest} = props;

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: appColors.white}]}
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
