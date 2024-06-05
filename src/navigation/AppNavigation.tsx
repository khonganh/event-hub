import * as React from 'react';
import SplashScreen from '~/screens/splash';
import AuthNavigation from './authNavigation';

const AppNavigation = () => {
  const [isShowPlash, setIsShowPlash] = React.useState(true);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsShowPlash(false);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  if (isShowPlash) {
    return <SplashScreen />;
  } else {
    return <AuthNavigation />;
  }
};

export default AppNavigation;
