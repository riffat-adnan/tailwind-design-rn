import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

import Login from '../../screens/Auth/Login';
import OnBoarding from '../../screens/Auth/Onboarding';
import SignUp from '../../screens/Auth/SignUp/SignUp';
import GetName from '../../screens/Auth/GetName';
import Verification from '../../screens/Auth/Verification';
import Attribution from '../../screens/Auth/Attribution';
import Discounts from '../../screens/Auth/Discounts';

const AuthStackNav = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="OnBoarding" component={OnBoarding} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="GetName" component={GetName} />
      <AuthStack.Screen name="Verification" component={Verification} />
      <AuthStack.Screen name="Attribution" component={Attribution} />
      <AuthStack.Screen name="Discounts" component={Discounts} />
    </AuthStack.Navigator>
  );
};

export {AuthStackNav};
