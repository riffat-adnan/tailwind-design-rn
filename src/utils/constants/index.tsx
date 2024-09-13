import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

export function useHideBottomBar() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation
      .getParent()
      ?.setOptions({tabBarStyle: {display: 'none'}, tabBarVisible: false});
    return () =>
      navigation
        .getParent()
        ?.setOptions({tabBarStyle: undefined, tabBarVisible: undefined});
  }, [navigation]);
}

export const hearAboutUs = [
  {
    id: 0,
    title: 'TikTok',
    image: require('../../assets/images/tiktok.png'),
  },
  {
    id: 1,
    title: 'Instagram',
    image: require('../../assets/images/intagram.png'),
  },
  {
    id: 2,
    title: 'Friends',
    image: require('../../assets/images/friends.png'),
  },
  {
    id: 3,
    title: 'Reddit',
    image: require('../../assets/images/reddit.png'),
  },
  {
    id: 4,
    title: 'Other',
    image: require('../../assets/images/other.png'),
  },
];