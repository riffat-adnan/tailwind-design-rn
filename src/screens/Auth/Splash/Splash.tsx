import React, {useEffect} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import tw from 'twrnc';
import {AppButton} from '../../../components';

interface SplashProps {
  navigation: any;
}

const Splash = ({navigation}: SplashProps) => {
  const tailwind = useTailwind();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Auth', {
        screen: 'OnBoarding',
      });
    }, 2000);
  }, []);

  return (
    <SafeAreaView
      style={tailwind(
        'flex-1 bg-background bg-white justify-center items-center ',
      )}>
      <Image
        style={tailwind('logo')}
        resizeMode={'contain'}
        source={require('../../../assets/logos/chestr_logo.png')}
      />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {},
});
