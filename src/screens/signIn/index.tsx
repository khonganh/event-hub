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
import {appColors} from '~/constants/appColors';
import Section from '~/components/section';
import HStack from '~/components/hstack';
import RememberMe from './components/RememberMe';

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
          <Section title="Sign In" sectionStyles={styles.section}>
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
              <ButtonCustom text="Forgot Password?" />
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
  section: {
    marginTop: 30,
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
});
