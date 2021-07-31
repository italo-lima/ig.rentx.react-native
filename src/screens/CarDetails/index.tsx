import React from 'react';
import { useNavigation, useRoute } from "@react-navigation/native"

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import Button from '../../components/Button';
import {
  About,
  Accessories,
  Brand,
  CarImages,
  Container,
  Content,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent
} from './styles';
import { CarDTO } from '../../dtos/Car.dto';
import { getAccesoryIcon } from '../../utils/getAccesoryIcon';

interface Params {
  car: CarDTO
}

export function CarDetails() {
  const navigation = useNavigation()
  const route = useRoute() 
  const { car } = route.params as Params

  function handleConfirmRental() {
    navigation.navigate('Scheduling')
  }

  function handleBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={car.photos}
        />
      </CarImages>

      <Content>

      <Details>
        <Description>
          <Brand>{car.brand}</Brand>
          <Name>{car.name }</Name>
        </Description>

        <Rent>
          <Period>{car.rent.period}</Period>
          <Price>{`R$ ${car.rent.price}`}</Price>
        </Rent>
      </Details>

        <Accessories>
          {car.accessories.map(accessory => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccesoryIcon(accessory.type)}
            />
          ))}
      </Accessories>

      <About>
        {car.about}
      </About>
      </Content>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  )
}