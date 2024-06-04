import * as React from 'react';
import {View} from 'react-native';

interface SpaceProps {
  width?: number;
  height?: number;
}

const Space = (props: SpaceProps) => {
  const {width, height} = props;
  return <View style={[{width, height}]} />;
};

Space.defaultProps = {
  width: 0,
  height: 0,
};

export default Space;
