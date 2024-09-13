import * as React from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import tw from 'twrnc';
import {AppButton, AppInput, IconButton} from '../../../components';

interface SignUpProps {
  navigation: any;
}

const SignUp = (props: SignUpProps) => {
  const tailwind = useTailwind();
  const [email, setEmail] = React.useState('');

  return (
    <SafeAreaView
      style={tailwind(
        'flex-1 bg-background bg-white justify-center items-center ',
      )}>
      <Image
        source={require('../../../assets/logos/chestr_logo.png')}
        style={tailwind('logo')}
        resizeMode={'contain'}
      />
      <Text style={tailwind('subHeading')}>
        Save items from any online store to a single{'\n'}wishlist, get discount
        notifications, follow{'\n'}friends and more!
      </Text>
      <AppInput
        value={email}
        label={'Email*'}
        placeholder={'Enter your email'}
        onChangeText={txt => setEmail(txt)}
        keyboardType={'email-address'}
      />
      <Text style={tailwind('agreeText')}>
        By signing up, you agree to the{' '}
        <Text style={tailwind('underline')}>
          Terms and Conditions{'\n'}and Privacy Policy.
        </Text>
      </Text>
      <AppButton
        title="Sign Up"
        onPress={() => props.navigation.navigate('Verification')}
      />
      <IconButton
        title="Sign up with Google"
        icon={require('../../../assets/images/googleIcon.png')}
        onPress={() => {}}
      />
      <View style={tailwind('flex-row')}>
        <Text style={tailwind('greyMedium')}>Already have an account?</Text>
        <Text
          style={tailwind('pinkMedium')}
          onPress={() => props.navigation.navigate('Login')}>
          Log In
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
