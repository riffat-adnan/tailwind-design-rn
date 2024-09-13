import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import tw from 'twrnc';
import {
  AppButton,
  AppInput,
  HearAboutButton,
  IconButton,
} from '../../../components';
import {SimpleHeader} from '../../../components/Headers/SimpleHeader';
import {hearAboutUs} from '../../../utils';

interface AttributionProps {
  navigation: any;
}

const Attribution = (props: AttributionProps) => {
  const tailwind = useTailwind();

  return (
    <SafeAreaView
      style={tailwind('flex-1  bg-background bg-white	 justify-center ')}>
      <SimpleHeader
        rightTitle="Skip"
        onBackPress={() => props.navigation.goBack()}
        onSkipPress={() => props.navigation.navigate('Login')}
      />
      <View style={tailwind('mt-10')} />
      <Image
        source={require('../../../assets/images/heart.png')}
        style={tailwind('logoImageLeft')}
        resizeMode={'contain'}
      />
      <Text style={tailwind('authTitleLeft')}>One last thing Faruk!</Text>
      <Text style={tailwind('subHeading1')}>How did you hear about us?</Text>
      <FlatList
        data={hearAboutUs}
        contentContainerStyle={tailwind('w-full')}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={({item, index}) => (
          <HearAboutButton
            title={item.title}
            icon={item.image}
            onPress={() => props.navigation.navigate('Discounts')}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Attribution;
