import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import ButtonCustom from '~/components/button';
import HStack from '~/components/hstack';
import {appColors} from '~/constants/appColors';
import {appInfo} from '~/constants/appInfo';
import {screenName} from '~/constants/screenName';
import {navigate} from '~/services/navigationService';

const OnBoardScreen = () => {
  const ref = React.useRef<ICarouselInstance>(null);
  const scrollOffsetValue = useSharedValue<number>(0);
  const progress = useSharedValue<number>(0);

  const listBoard = [
    {
      id: 1,
      image: require('~/assets/images/bg_onboarding_1.png'),
    },
    {
      id: 1,
      image: require('~/assets/images/bg_onboarding_2.png'),
    },
    {
      id: 1,
      image: require('~/assets/images/bg_onboarding_3.png'),
    },
  ];

  const handleNext = () => {
    let index = ref?.current?.getCurrentIndex() ?? 0;
    if (index < 2) {
      ref?.current?.next();
    } else {
      navigate(screenName.HOME_SCREEN);
    }
  };

  const handleSkip = () => {
    navigate(screenName.HOME_SCREEN);
  };

  const renderItem = ({item}: any) => {
    return <Image style={styles.slide} source={item.image} />;
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={ref}
        data={listBoard}
        renderItem={renderItem}
        width={appInfo.sizes.WIDTH}
        vertical={false}
        loop={false}
        defaultScrollOffsetValue={scrollOffsetValue}
        onProgressChange={progress}
        pagingEnabled
      />

      <HStack style={styles.buttonContainer}>
        <ButtonCustom text="Skip" onPress={handleSkip} />
        <Pagination.Basic
          progress={progress}
          data={listBoard}
          dotStyle={{backgroundColor: appColors.gray4, borderRadius: 50}}
          containerStyle={{gap: 8}}
          activeDotStyle={{backgroundColor: appColors.white, borderRadius: 50}}
        />
        <ButtonCustom text="Next" onPress={handleNext} />
      </HStack>
    </View>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  slide: {
    width: '100%',
    height: '100%',
  },
  pagination: {
    marginBottom: 16,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: '5%',
    left: 24,
    right: 24,
  },
});
