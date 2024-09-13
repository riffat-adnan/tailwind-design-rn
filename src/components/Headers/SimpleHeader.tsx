import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useTailwind} from 'tailwind-rn';

interface SimpleHeaderProps {
  rightTitle: string;
  showLeftIcon: boolean;
  onBackPress: any;
  onSkipPress: any;
}

const SimpleHeader = ({
  rightTitle,
  showLeftIcon,
  onBackPress,
  onSkipPress,
}: SimpleHeaderProps) => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('flex-row justify-between items-center mx-5 mt-2')}>
      {!showLeftIcon ? (
        <TouchableOpacity onPress={onBackPress}>
          <Image
            style={tailwind('backArrow')}
            resizeMode={'contain'}
            source={require('../../assets/images/back_arrow.png')}
          />
        </TouchableOpacity>
      ) : (
        <View />
      )}

      <TouchableOpacity onPress={onSkipPress}>
        <Text style={tailwind('font-interRegular')}>{rightTitle}</Text>
    </TouchableOpacity>
    </View>
  );
};

export {SimpleHeader};

const styles = StyleSheet.create({
  container: {},
});
