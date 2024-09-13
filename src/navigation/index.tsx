import 'react-native-gesture-handler';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const AppStack = createNativeStackNavigator();

import Splash from '../screens/Auth/Splash';
import {AuthStackNav} from './stacks/AuthStack';

const MainAppNav = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}
      >
        <AppStack.Screen name={'Splash'} component={Splash} />
        <AppStack.Screen name={'Auth'} component={AuthStackNav} />
        {/* <AppStack.Screen name={'App'} component={BottomTabs} /> */}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export {MainAppNav};
