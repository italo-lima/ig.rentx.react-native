import React from 'react';

import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

import Animated, { 
  useSharedValue, 
  useAnimatedStyle,
  withTiming,
  interpolate,  
  Extrapolate,
  runOnJS
}  from 'react-native-reanimated';

import {
  Container
} from './styles';

export function Splash() {
  const splashAnimation = useSharedValue(0);

  return (
    <Container>
      <BrandSvg width={80} height={50} />

      <LogoSvg width={180} height={20} />

    </Container>
  )
}