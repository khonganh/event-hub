import * as React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import ButtonCustom from '~/components/button';
import InputController from '~/components/input/InputController';
import MainLayout from '~/components/mainLayout';
import Space from '~/components/space';
import TextComponent from '~/components/text';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {appColors} from '~/constants/appColors';
import Section from '~/components/section';
import HStack from '~/components/hstack';
import RememberMe from './components/RememberMe';
import {fontFamilies} from '~/constants/fontFamilies';

type FormValues = {
  email: string;
  password: string;
  isRemember: boolean;
};

const SignInScreen = () => {
  const schema = yup
    .object()
    .shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
      isRemember: yup.boolean(),
    })
    .required();

  const {control, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      password: '',
      isRemember: false,
    },
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log('data', data);
  };

  console.log('render');

  return (
    <MainLayout isHaveBackground>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          style={styles.scrollView}
          keyboardShouldPersistTaps="handled">
          <Image
            style={styles.logo}
            source={require('~/assets/images/logo_vertical.png')}
          />
          <Section title="Sign In" marginTop={30}>
            <InputController
              control={control}
              name="email"
              placeholder="Email"
              inputLeftElement={
                <Feather name="mail" size={22} color={appColors.gray} />
              }
            />
            <Space height={18} />
            <InputController
              control={control}
              name="password"
              placeholder="Password"
              secureTextEntry
              inputLeftElement={
                <Feather name="lock" size={22} color={appColors.gray} />
              }
            />
            <Space height={18} />
            <HStack justifyContent="space-between">
              <RememberMe control={control} name="isRemember" />
              <ButtonCustom
                text="Forgot Password?"
                textStyles={styles.buttonForgot}
              />
            </HStack>
            <Space height={18} />
            <ButtonCustom
              text="SIGN IN"
              type="primary"
              iconFlex="right"
              styles={styles.button}
              icon={
                <View style={styles.viewIcon}>
                  <Feather
                    name="arrow-right"
                    size={16}
                    color={appColors.white}
                  />
                </View>
              }
              onPress={handleSubmit(onSubmit)}
            />
            <TextComponent
              text="OR"
              color={appColors.gray4}
              styles={styles.orText}
            />
            <Space height={18} />
            <ButtonCustom
              text="Login with Google"
              type="primary"
              styles={styles.button}
              color={appColors.white}
              textColor={appColors.text}
              textFont={fontFamilies.regular}
              textStyles={styles.textButton}
              iconFlex="left"
              icon={
                <AntDesign name="google" size={24} color={appColors.text} />
              }
            />
            <ButtonCustom
              text="Login with Facebook"
              type="primary"
              styles={styles.button}
              color={appColors.white}
              textColor={appColors.text}
              textFont={fontFamilies.regular}
              textStyles={styles.textButton}
              iconFlex="left"
              icon={
                <Feather name="facebook" size={24} color={appColors.text} />
              }
            />
            <HStack justifyContent="center">
              <TextComponent text={"Don't have an account? "} size={15} />
              <ButtonCustom
                text="Sign up"
                textStyles={styles.buttonSignUp}
                type="link"
              />
            </HStack>
          </Section>
        </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  viewIcon: {
    backgroundColor: appColors.blue,
    padding: 4,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 24,
  },
  buttonForgot: {
    fontSize: 14,
    fontWeight: '400',
  },
  orText: {
    textAlign: 'center',
  },
  textButton: {
    fontWeight: '400',
  },
  buttonSignUp: {
    fontSize: 15,
    fontWeight: '400',
  },
});
