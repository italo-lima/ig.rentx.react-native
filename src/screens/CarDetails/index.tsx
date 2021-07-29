import React from 'react';
import { useNavigation } from "@react-navigation/native"

import speedSvg from "../../assets/speed.svg"
import accelerationSvg from "../../assets/acceleration.svg"
import forceSvg from "../../assets/force.svg"
import gasolineSvg from "../../assets/gasoline.svg"
import exchangeSvg from "../../assets/exchange.svg"
import peopleSvg from "../../assets/people.svg"
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

export function CarDetails() {
  const navigation = useNavigation()

  function handleConfirmRental() {
    navigation.navigate('Scheduling')
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={["https://img2.gratispng.com/20180628/stg/kisspng-2018-audi-s5-3-0t-premium-plus-coupe-audi-rs5-2017-2018-audi-a5-coupe-5b35130451d959.0738564215302049323353.jpg"]}
        />
      </CarImages>

      <Content>

      <Details>
        <Description>
          <Brand>Lamborguini</Brand>
          <Name>huracan</Name>
        </Description>

        <Rent>
          <Period>Ao dia</Period>
          <Price>R$ 580,00</Price>
        </Rent>
      </Details>

      <Accessories>
        <Accessory name="380km/h" icon={speedSvg} />
        <Accessory name="3.2s" icon={accelerationSvg} />
        <Accessory name="800 hp" icon={forceSvg} />
        <Accessory name="Gasolina" icon={gasolineSvg} />
        <Accessory name="Auto" icon={exchangeSvg} />
        <Accessory name="2 pessoas" icon={peopleSvg} />
      </Accessories>

      <About>
        Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula
        manquis sem cabeça. Admodum accumsan disputationi eu sit. Vide electram
        sadipscing et per. Suco de cevadiss deixa as pessoas mais interessantis.
        Delegadis gente finis, bibendum egestas augue arcu ut est.
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