import * as React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';
import {appColors} from '~/constants/appColors';

interface MainLayoutProps extends SafeAreaViewProps {
  isHaveBackground?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = props => {
  const {isHaveBackground, children, ...rest} = props;

  if (isHaveBackground) {
    return (
      <ImageBackground
        source={require('~/assets/images/background.png')}
        style={[styles.container]}>
        <SafeAreaView style={[styles.container]} {...rest}>
          {children}
        </SafeAreaView>
      </ImageBackground>
    );
  } else {
    return (
      <SafeAreaView
        style={[styles.container, {backgroundColor: appColors.white}]}
        {...rest}>
        {children}
      </SafeAreaView>
    );
  }
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
