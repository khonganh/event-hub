import {Text, StyleProp, TextStyle, Platform} from 'react-native';
import React from 'react';
import {globalStyles} from '~/styles/globalStyles';
import {appColors} from '~/constants/appColors';
import {fontFamilies} from '~/constants/fontFamilies';

interface Props {
  text: string;
  color?: string;
  size?: number;
  flex?: number;
  font?: string;
  styles?: StyleProp<TextStyle>;
  title?: boolean;
  numberOfLine?: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
}

const TextComponent = (props: Props) => {
  const {
    text,
    size,
    flex,
    font,
    color,
    styles,
    title,
    numberOfLine,
    fontWeight,
  } = props;

  const fontSizeDefault = Platform.OS === 'ios' ? 16 : 14;

  return (
    <Text
      numberOfLines={numberOfLine}
      style={[
        globalStyles.text,
        {
          color: color ?? appColors.text,
          flex: flex ?? 0,
          fontSize: size ? size : title ? 24 : fontSizeDefault,
          fontWeight: fontWeight,
          fontFamily: font
            ? font
            : title
            ? fontFamilies.bold
            : fontFamilies.medium,
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
