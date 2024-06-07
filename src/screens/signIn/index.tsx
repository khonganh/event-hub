import * as React from 'react';
import {useForm} from 'react-hook-form';
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
import {globalStyles} from '~/styles/globalStyles';
import Section from '~/components/section';
import {Switch} from 'react-native-gesture-handler';

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
        <ScrollView
          style={globalStyles.container}
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
              _controller={{
                rules: {required: 'This field is required'},
              }}
              inputLeftElement={
                <Feather name="mail" size={22} color={appColors.gray} />
              }
            />
            <Space height={18} />
            <InputController
              control={control}
              name="password"
              placeholder="Password"
              _controller={{
                rules: {required: true},
              }}
              secureTextEntry
              inputLeftElement={
                <Feather name="lock" size={22} color={appColors.gray} />
              }
            />
            <Space height={18} />
            <Switch
              value={true}
              style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
              onValueChange={value => {}}
            />
            <Space height={18} />
            <ButtonCustom
              text="SIGN IN"
              type="primary"
              iconFlex="right"
              styles={{marginHorizontal: 24}}
              icon={
                <View
                  style={{
                    backgroundColor: appColors.blue,
                    padding: 4,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
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
});
