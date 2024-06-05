import {useNavigation, useTheme, DrawerActions} from '@react-navigation/native';
import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {fontFamilies} from '~/constants/fontFamilies';

interface HeaderProps {
  title: string;
  openDrawer?: boolean;
  canGoBack?: boolean;
}

const Header = (props: HeaderProps) => {
  const {title, openDrawer, canGoBack} = props;
  const {colors} = useTheme();
  const navigation = useNavigation();

  function handleOpenDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <View style={[styles.container]}>
      {openDrawer && (
        <TouchableOpacity
          style={styles.backIcon}
          hitSlop={{left: 5, top: 5, right: 5, bottom: 5}}
          onPress={handleOpenDrawer}>
          <Icon name="menu" size={28} color={colors.text} />
        </TouchableOpacity>
      )}
      {canGoBack && (
        <TouchableOpacity
          style={styles.backIcon}
          hitSlop={{left: 5, top: 5, right: 5, bottom: 5}}
          onPress={handleGoBack}>
          <Icon name="arrow-left" size={22} color={colors.text} />
        </TouchableOpacity>
      )}
      <Text style={[styles.title, {color: colors.text}]}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    paddingLeft: 12,
    fontFamily: fontFamilies.medium,
  },
  backIcon: {
    // position: 'absolute',
    // left: 8,
  },
});
