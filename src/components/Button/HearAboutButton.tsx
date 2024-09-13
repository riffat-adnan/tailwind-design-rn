import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageProps,
  Image,
} from 'react-native';
import {useTailwind} from 'tailwind-rn';

interface HearButtonProps {
  title: string;
  onPress: any;
  icon: any;
}

const HearAboutButton = ({title, onPress, icon}: HearButtonProps) => {
  const tailwind = useTailwind();

  return (
    <TouchableOpacity onPress={onPress} style={tailwind('hearIconButton')}>
      <Image
        source={icon}
        style={tailwind('iconStyle25')}
        resizeMode={'contain'}
      />
      <Text style={tailwind('hearButtonText')}>{title}</Text>
    </TouchableOpacity>
  );
};

export {HearAboutButton};
