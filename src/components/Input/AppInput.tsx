import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextProps,
  TextInputProps,
  KeyboardType,
} from 'react-native';
import {Input as RNInput, IconProps, Icon} from 'react-native-elements';
import {useTailwind} from 'tailwind-rn';

interface AppInputProps {
  value: string;
  placeholder: string;
  leftIcon: Function;
  rightIcon: Function;
  secureTextEntry: boolean;
  onChangeText: (txt: string) => void;
  editable: boolean;
  label: string;
  multiline: boolean;
  maxLength: number;
  keyboardType: KeyboardType;
  placeholderTextColor: any;
}

const AppInput = ({
  value,
  placeholder,
  leftIcon,
  rightIcon,
  secureTextEntry,
  onChangeText,
  editable,
  label,
  multiline,
  maxLength,
  keyboardType,
  placeholderTextColor,
}: AppInputProps) => {
  const tailwind = useTailwind();
  const [showPass, setShowPass] = React.useState(secureTextEntry);

  return (
    <RNInput
      label={label}
      labelStyle={tailwind('inputLabel')}
      placeholder={placeholder}
      placeholderTextColor={tailwind('placeholder')}
      secureTextEntry={showPass}
      inputContainerStyle={tailwind('inputContainerStyle')}
      containerStyle={tailwind('inputContainer')}
      inputStyle={tailwind('inputText')}
      leftIcon={leftIcon}
      onChangeText={onChangeText}
      value={value}
      editable={editable}
      rightIcon={
        secureTextEntry ? (
          <Icon
            onPress={() => {
              setShowPass(!showPass);
            }}
            name={!showPass ? 'eye-outline' : 'eye-off-outline'}
            type={'material-community'}
            size={22}
            color={tailwind('color-black')}
            tvParallaxProperties={undefined}
          />
        ) : (
          rightIcon
        )
      }
      renderErrorMessage={false}
      autoCompleteType={undefined}
      multiline={multiline}
      maxLength={maxLength}
      keyboardType={keyboardType}
    />
  );
};

export {AppInput};
