import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {screenName} from '~/constants/screenName';
import HomeScreen from '~/screens/home';
import SplashScreen from '~/screens/splash';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenName.SPLASH_SCREEN} component={SplashScreen} />
      <Stack.Screen name={screenName.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
