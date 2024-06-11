import * as React from 'react';
import {View, StyleSheet, ViewProps} from 'react-native';

interface HStackProps extends ViewProps {
  children: React.ReactNode;
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
}

const HStack = (props: HStackProps) => {
  const {children, style, ...rest} = props;

  return (
    <View style={[styles.container, style]} {...rest}>
      {children}
    </View>
  );
};

export default HStack;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
