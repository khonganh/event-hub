import * as React from 'react';
import {useForm} from 'react-hook-form';
import {
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import ButtonCustom from '~/components/button';
import InputController from '~/components/input/InputController';
import MainLayout from '~/components/mainLayout';
import Space from '~/components/space';
import TextComponent from '~/components/text';
import Feather from 'react-native-vector-icons/Feather';
import {appColors} from '~/constants/appColors';

const SignInScreen = () => {
  const {control, handleSubmit} = useForm({
    mode: 'all',
  });

  const onSubmit = (data: any) => {
    console.log('data', data);
  };

  return (
    <MainLayout>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView style={{flex: 1}} keyboardShouldPersistTaps="handled">
          <Image
            style={styles.logo}
            source={require('~/assets/images/logo_vertical.png')}
          />
          <TextComponent title text="Sign in" fontWeight="500" />
          <InputController
            control={control}
            name="userName"
            _controller={{
              rules: {required: 'This field is required'},
            }}
            inputLeftElement={
              <Feather name="mail" size={22} color={appColors.gray} />
            }
          />
          <Space height={20} />
          <InputController
            control={control}
            name="password"
            _controller={{
              rules: {required: true},
            }}
            secureTextEntry
            inputLeftElement={
              <Feather name="lock" size={22} color={appColors.gray} />
            }
          />
        </ScrollView>
        <ButtonCustom
          text="Sign in"
          type="primary"
          onPress={handleSubmit(onSubmit)}
        />
      </KeyboardAvoidingView>
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
