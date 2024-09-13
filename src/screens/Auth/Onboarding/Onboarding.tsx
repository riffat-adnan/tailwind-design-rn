import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {AppButton} from '../../../components';
import AppIntroSlider from 'react-native-app-intro-slider';
import {SimpleHeader} from '../../../components/Headers/SimpleHeader';

const slides = [
  {
    key: 1,
    title: 'Easy Save',
    text: 'Save items into wishlists from any\n online store.',
    image: require('../../../assets/images/onboarding-one.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Easy Share',
    text: 'Create and share your wishlists\n with friends and family.',
    image: require('../../../assets/images/onboarding-two.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Discounts',
    text: "Get notified every time there's a \ndiscount on your saved items.",
    image: require('../../../assets/images/onboarding-three.png'),
    backgroundColor: '#22bcb5',
  },
];

interface OnBoardingProps {
  navigation: any;
}

const OnBoarding = (props: OnBoardingProps) => {
  let sliderRef = React.useRef(null);

  const tailwind = useTailwind();

  const _renderItem = ({item, index}: any) => {
    return (
      <React.Fragment>
        <SimpleHeader
          rightTitle="Skip"
          onBackPress={() => {
            if (index === 2) {
              sliderRef?.current.goToSlide(1);
            } else if (index === 1) {
              sliderRef?.current.goToSlide(0);
            } else {
              // alert('Onboarding Completed');
              props.navigation.navigate('Login');
            }
          }}
          showLeftIcon={index === 0 ? true : false}
          onSkipPress={() => props.navigation.navigate('Login')}
        />
        <View style={tailwind('flex-1 justify-center')}>
          <Image
            source={item.image}
            resizeMode={'contain'}
            style={tailwind('onboardingImage')}
          />
          <Text style={tailwind('onboardingTitle')}>{item.title}</Text>
          <Text style={tailwind('onboardingDesc')}>{item.text}</Text>
          <View style={tailwind('absolute bottom-0 w-full')}>
            <AppButton
              title={index === 0 || index === 1 ? 'Next ->' : 'Get Started ->'}
              onPress={() => {
                if (index === 0) {
                  sliderRef?.current.goToSlide(1);
                } else if (index === 1) {
                  sliderRef?.current.goToSlide(2);
                } else {
                  // alert('Onboarding Completed');
                  props.navigation.navigate('Login');
                }
              }}
            />
          </View>
        </View>
      </React.Fragment>
    );
  };
  const _renderNextButton = () => {
    return <View />;
  };
  const _renderDoneButton = () => {
    return <View />;
  };

  const renderPagination = activeIndex => {
    return (
      <View
        style={tailwind(
          'items-center bottom-28 flex-row items-center self-center',
        )}>
        {[{}, {}, {}].map((_, i) => (
          <TouchableOpacity
            key={i}
            style={
              i === activeIndex
                ? tailwind('w-10 h-2 mr-2 rounded-md bg-activeDot')
                : tailwind('w-10 h-2 mr-2 rounded-md bg-dot')
            }
            onPress={() => {}}
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={tailwind('flex-1 bg-background bg-white')}>
      <AppIntroSlider
        ref={sliderRef}
        data={slides}
        renderDoneButton={_renderDoneButton}
        renderItem={_renderItem}
        renderNextButton={_renderNextButton}
        renderPagination={renderPagination}
      />
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {},
});
