import {createRef} from 'react';
import {StackActions} from '@react-navigation/native';
import {NavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createRef<NavigationContainerRef<any>>();

export function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

export function replace(name: string, params?: any) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop());
}

export function pop(number = 1) {
  navigationRef.current?.dispatch(StackActions.pop(number));
}

export function goBack() {
  navigationRef.current?.goBack();
}

export function setRoot(routeName: string, params = {}) {
  navigationRef.current?.reset({
    index: 0,
    routes: [
      {
        name: routeName,
        params,
      },
    ],
  });
}

export function getCurrentRoute() {
  return navigationRef.current?.getCurrentRoute()?.name;
}
