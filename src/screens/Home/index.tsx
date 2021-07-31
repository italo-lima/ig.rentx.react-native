import React, {useEffect,useState} from "react"
import { StatusBar } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native"

import Logo from "../../assets/logo.svg"
import { Car } from "../../components/Car";

import {
  CarList,
  Container,
  Header,
  HeaderContent,
  TotalCars
} from "./styles"
import { api } from "../../services/api";
import { CarDTO } from "../../dtos/Car.dto";
import { Load } from "../../components/Load";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation()

  function handleCardDetails(car: CarDTO) {
    navigation.navigate('CarDetails', {car})
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const { data } = await api.get('/cars')
        setCars(data)
      } catch (error) {
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])

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

      {loading ? <Load /> : (
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <Car
              data={item}
              onPress={() => handleCardDetails(item)}
            />
          }
        />
      )}
        
    </Container>
  )
}