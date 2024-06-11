import * as React from 'react';
import {Control, Controller} from 'react-hook-form';
import {StyleSheet, Switch} from 'react-native';
import HStack from '~/components/hstack';
import TextComponent from '~/components/text';
import {appColors} from '~/constants/appColors';

interface RememberMeProps {
  control?: Control<any>;
  name: string;
}

const RememberMe = (props: RememberMeProps) => {
  const {control, name} = props;

  return (
    <HStack style={styles.container}>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <Switch
            value={value}
            style={{transform: [{scaleX: 0.7}, {scaleY: 0.7}]}}
            trackColor={{true: appColors.primary}}
            onValueChange={val => {
              onChange(val);
            }}
          />
        )}
        name={name}
      />
      <TextComponent text="Remember me" size={14} />
    </HStack>
  );
};

export default RememberMe;

const styles = StyleSheet.create({
  container: {
    marginLeft: -6,
  },
});
