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

interface IconButtonProps {
  title: string;
  onPress: any;
  icon: any;
}

const IconButton = ({title, onPress, icon}: IconButtonProps) => {
  const tailwind = useTailwind();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={tailwind('iconButton')}
      // {{
      //   flexDirection: 'row',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      //   borderColor: 'black',
      //   borderWidth: 1,
      //   borderRadius: 8,
      //   width: '85%',
      //   paddingVertical: 10,
      //   marginVertical: 10,
      // }}
    >
      <Image
        source={icon}
        style={tailwind('buttonIcon')}
        resizeMode={'contain'}
      />
      <Text style={tailwind('iconButtonText')}>{title}</Text>
    </TouchableOpacity>
  );
};

export {IconButton};
