import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {screenName} from '~/constants/screenName';
import SignInScreen from '~/screens/signIn';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screenName.SIGN_IN_SCREEN} component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
