import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import tw from 'twrnc';
import {AppButton, AppInput, IconButton} from '../../../components';
import {SimpleHeader} from '../../../components/Headers/SimpleHeader';

interface GetNameProps {
  navigation: any;
}

const GetName = (props: GetNameProps) => {
  const tailwind = useTailwind();
  const [name, setName] = React.useState('');

  return (
    <SafeAreaView
      style={tailwind(
        'flex-1 bg-background bg-white justify-center items-center ',
      )}>
      <SimpleHeader
        onBackPress={() => {
          props.navigation.navigate('Login');
        }}
        showLeftIcon={true}
      />
      <Image
        source={require('../../../assets/images/smiley.png')}
        style={tailwind('logoImageLeft')}
        resizeMode={'contain'}
      />
      <Text style={tailwind('authTitleLeft')}>Almost there!</Text>
      <Text style={tailwind('subHeading1')}>What should we call you?</Text>
      <AppInput
        value={name}
        label={'Name'}
        placeholder={'Enter name'}
        onChangeText={txt => setName(txt)}
        keyboardType={'default'}
      />

      <AppButton
        title="Continue"
        onPress={() => props.navigation.navigate('Attribution')}
      />
    </SafeAreaView>
  );
};

export default GetName;
