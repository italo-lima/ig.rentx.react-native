import React, {useEffect,useState} from "react"
import { StatusBar } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"
import { useTheme } from "styled-components";

import Logo from "../../assets/logo.svg"
import { Car } from "../../components/Car";

import {
  CarList,
  Container,
  Header,
  HeaderContent,
  TotalCars,
  MyCarsButton
} from "./styles"
import { api } from "../../services/api";
import { CarDTO } from "../../dtos/Car.dto";
import { Load } from "../../components/Load";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)

  const theme = useTheme()

  const navigation = useNavigation()

  function handleCardDetails(car: CarDTO) {
    navigation.navigate('CarDetails', {car})
  }

  function handleOpenMyCars() {
    navigation.navigate('MyCars')
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
            Total de {cars.length} carros
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
      
      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons
          name="ios-car-sport"
          size={32}
          color={theme.colors.shape}
        />
      </MyCarsButton>
    </Container>
  )
}