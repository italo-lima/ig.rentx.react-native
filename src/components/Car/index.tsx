import { useNetInfo } from '@react-native-community/netinfo';
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Car as CarModel } from '../../database/model/car';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import {
  About,
  Brand,
  CarImage,
  Container,
  Details,
  Name,
  Period,
  Price,
  Rent,
  Type
} from './styles';

interface Props extends RectButtonProps{
  data: CarModel;
}

export function Car({ data, ...rest }: Props) {
  const netInfo = useNetInfo()
  const MotorIcon = getAccessoryIcon(data.fuel_type)

  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.period}</Period>
            <Price>{`R$ ${!!netInfo.isConnected ? data.price : "..."}`}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{ uri: data.thumbnail}}
        resizeMode="contain"
      />
    </Container>
  )
}