import React from "react"
import { StatusBar } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg"
import { Car } from "../../components/Car";

import {
  CarList,
  Container,
  Header,
  HeaderContent,
  TotalCars
} from "./styles"

export function Home() {
  const carData = {
    name: "AUDI",
    brand: "R$ 5 Coupé",
    rent: {
      period: "Ao Dia",
      price: 120,
    },
    thumbnail: "https://img2.gratispng.com/20180628/stg/kisspng-2018-audi-s5-3-0t-premium-plus-coupe-audi-rs5-2017-2018-audi-a5-coupe-5b35130451d959.0738564215302049323353.jpg"
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3]}
        keyExtractor={item => String(item)}
        renderItem={({item}) => <Car data={carData} />}
      />
        
    </Container>
  )
}