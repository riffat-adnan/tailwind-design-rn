import * as React from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import tw from 'twrnc';
import {AppButton, AppInput, IconButton} from '../../../components';

interface LoginProps {
  navigation: any;
}

const Login = (props: LoginProps) => {
  const tailwind = useTailwind();
  const [email, setEmail] = React.useState('');

  return (
    <SafeAreaView
      style={tailwind(
        'flex-1 bg-background bg-white justify-center items-center ',
      )}>
      <Image
        source={require('../../../assets/images/chest.png')}
        style={tailwind('logoImage')}
        resizeMode={'contain'}
      />
      <Text style={tailwind('authTitle')}>Log in to your account</Text>
      <AppInput
        value={email}
        label={'Email'}
        placeholder={'Enter your email'}
        onChangeText={txt => setEmail(txt)}
        keyboardType={'email-address'}
      />

      <AppButton title="Log In" onPress={() => {}} />
      <IconButton
        title="Log In with Google"
        icon={require('../../../assets/images/googleIcon.png')}
        onPress={() => {}}
      />
      <View style={tailwind('flex-row')}>
        <Text style={tailwind('greyMedium')}>Already have an account?</Text>
        <Text
          style={tailwind('pinkMedium')}
          onPress={() => props.navigation.navigate('SignUp')}>
          Sign Up
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
