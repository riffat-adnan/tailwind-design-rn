import * as React from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {AppButton} from '../../../components';

interface DiscountsProps {
  navigation: any;
}

const Discounts = (props: DiscountsProps) => {
  const tailwind = useTailwind();

  return (
    <SafeAreaView
      style={tailwind('flex-1 bg-background justify-center bg-white	')}>
      <Image
        source={require('../../../assets/images/discounts-image.png')}
        resizeMode={'contain'}
        style={tailwind('onboardingImage')}
      />
      <Text style={tailwind('onboardingTitleCenter')}>
        Get updates on{'\n'}discounts.
      </Text>
      <Text style={tailwind('subHeadingCenter')}>
        We can tell you when items in your wishlist{'\n'}are cheaper if you turn
        on notifications.
      </Text>
      <AppButton
        title="Get notifications"
        onPress={() => props.navigation.navigate('Login')}
      />
      <Text
        onPress={() => props.navigation.navigate('Login')}
        style={tailwind('pinkCenter')}>
        Maybe later
      </Text>
    </SafeAreaView>
  );
};

export default Discounts;
