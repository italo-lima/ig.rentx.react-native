import React from 'react';
import { Feather } from "@expo/vector-icons"
import { useTheme } from 'styled-components';
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
  Accessories,
  Brand,
  CalendarIcon,
  CarImages,
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
  RentalPeriod,
  RentalPrice,
  RentalPriceDetails,
  RentalPriceLabel,
  RentalPriceQuota,
  RentalPriceTotal
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

export function SchedulingDetails() {
  const theme = useTheme()

  const navigation = useNavigation()

  function handleConfirmRental() {
    navigation.navigate('Confirmation')
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

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>
              R$ 580 x3 diárias
            </RentalPriceQuota>
            <RentalPriceTotal>
              R$ 2.900
            </RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  )
}