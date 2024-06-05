import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {screenName} from '~/constants/screenName';
import HomeScreen from '~/screens/home';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenName.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
