import * as React from 'react';
import {Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {AppInput, LightPinkButton} from '../../../components';

interface VerificationProps {
  navigation: any;
}

const Verification = (props: VerificationProps) => {
  const tailwind = useTailwind();
  const [code, setCode] = React.useState('');

  return (
    <SafeAreaView
      style={tailwind(
        'flex-1 bg-background bg-white justify-center items-center  ',
      )}>
      <Image
        source={require('../../../assets/images/email.png')}
        style={tailwind('logoImageLeft')}
        resizeMode={'contain'}
      />
      <Text style={tailwind('authTitleLeft')}>Check your email</Text>
      <Text style={tailwind('subHeading1')}>
        We sent a temporary login code. Please{'\n'}check your inbox.
      </Text>
      <AppInput
        value={code}
        label={'Login Code'}
        placeholder={'Enter login code'}
        onChangeText={txt => setCode(txt)}
        keyboardType={'default'}
      />

      <LightPinkButton
        title="Continue with login code"
        onPress={() => props.navigation.navigate('GetName')}
      />

      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => props.navigation.navigate('Login')}>
        <Image
          source={require('../../../assets/images/back_arrow.png')}
          style={tailwind('backArrow1')}
          resizeMode={'contain'}
        />
        <Text style={tailwind('greyMedium')}>Back to log in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Verification;
