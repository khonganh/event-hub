import {StyleProp, ViewStyle, TextStyle, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '~/styles/globalStyles';
import {appColors} from '~/constants/appColors';
import TextComponent from '../text';
import {StyleSheet} from 'react-native';

interface ButtonCustomProps {
  icon?: ReactNode;
  text: string;
  type?: 'primary' | 'text' | 'link';
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyles?: StyleProp<TextStyle>;
  textFont?: string;
  onPress?: () => void;
  iconFlex?: 'right' | 'left';
  disable?: boolean;
}

const ButtonCustom = (props: ButtonCustomProps) => {
  const {
    icon,
    text,
    textColor,
    textStyles,
    textFont,
    color,
    styles,
    onPress,
    iconFlex,
    type,
    disable,
  } = props;

  const mergeStyleButton = StyleSheet.flatten([
    globalStyles.button,
    globalStyles.shadow,
    {
      backgroundColor: color
        ? color
        : disable
        ? appColors.gray4
        : appColors.primary,
      marginBottom: 17,
    },
    styles,
  ]);

  const mergeStyleText: TextStyle = StyleSheet.flatten([
    {
      marginLeft: icon ? 22 : 0,
      fontSize: 16,
      textAlign: 'center',
      fontWeight: '500',
    },
    textStyles,
  ]);

  return type === 'primary' ? (
    <TouchableOpacity
      disabled={disable}
      onPress={onPress}
      style={mergeStyleButton}>
      {icon && iconFlex === 'left' && icon}
      <TextComponent
        text={text}
        color={textColor ?? appColors.white}
        styles={mergeStyleText}
        flex={icon && iconFlex === 'right' ? 1 : 0}
        font={textFont}
      />
      {icon && iconFlex === 'right' && icon}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <TextComponent
        text={text}
        color={
          textColor
            ? textColor
            : type === 'link'
            ? appColors.primary
            : appColors.text
        }
      />
    </TouchableOpacity>
  );
};

export default ButtonCustom;
