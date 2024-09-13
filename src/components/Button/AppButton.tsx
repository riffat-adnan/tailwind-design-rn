import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useTailwind} from 'tailwind-rn';

interface AppButtonProps {
  title: string;
  onPress: any;
}

const AppButton = ({title, onPress}: AppButtonProps) => {
  const tailwind = useTailwind();

  return (
    <TouchableOpacity onPress={onPress} style={tailwind('appButton')}>
      <Text style={tailwind('appButtonText')}>{title}</Text>
    </TouchableOpacity>
  );
};

export {AppButton};

const styles = StyleSheet.create({
  container: {},
});
