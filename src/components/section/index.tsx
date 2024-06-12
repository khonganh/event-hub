import * as React from 'react';
import {View, StyleSheet, ViewStyle, StyleProp} from 'react-native';
import Space from '../space';
import TextComponent from '../text';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  marginTop?: number;
  sectionStyles?: StyleProp<ViewStyle>;
}

const Section = (props: SectionProps) => {
  const {title, children, sectionStyles, marginTop} = props;
  return (
    <View style={[styles.container, {marginTop}, sectionStyles]}>
      <TextComponent text={title} title fontWeight="500" />
      <Space height={20} />
      {children}
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
