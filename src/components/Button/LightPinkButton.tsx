import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useTailwind} from 'tailwind-rn';

interface LightPinkButtonProps {
  title: string;
  onPress: any;
}

const LightPinkButton = ({title, onPress}: LightPinkButtonProps) => {
  const tailwind = useTailwind();

  return (
    <TouchableOpacity onPress={onPress} style={tailwind('appButtonPink')}>
      <Text style={tailwind('appButtonTextPink')}>{title}</Text>
    </TouchableOpacity>
  );
};

export {LightPinkButton};
