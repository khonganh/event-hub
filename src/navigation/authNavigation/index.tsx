import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {screenName} from '~/constants/screenName';
import OnBoardScreen from '~/screens/onboard';
import SignInScreen from '~/screens/signIn';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={screenName.ONBOARD_SCREEN}
        component={OnBoardScreen}
      />
      <Stack.Screen name={screenName.SIGN_IN_SCREEN} component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
