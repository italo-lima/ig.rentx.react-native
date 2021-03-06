import React, {useState, useEffect} from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native"
import { useTheme } from 'styled-components'; 
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate
} from 'react-native-reanimated';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { useNetInfo } from '@react-native-community/netinfo';

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
  Description,
  Details,
  Footer,
  Header,
  Name,
  OfflineInfo,
  Period,
  Price,
  Rent
} from './styles';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { Car as ModelCar } from '../../database/model/car';
import { CarDTO } from '../../dtos/Car.dto';
import { api } from '../../services/api';

interface Params {
  car: CarDTO
}

export function CarDetails() {
  const [carUpdate, setCarUpdate] = useState<CarDTO>({} as CarDTO);

  const netInfo = useNetInfo();
  const theme = useTheme()
  const navigation = useNavigation()
  const route = useRoute() 
  const { car } = route.params as Params

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;    
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      ),
    }
  });

  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 150],
        [1, 0],
        Extrapolate.CLAMP
      )
    }
  });

  function handleConfirmRental() {
    navigation.navigate('Scheduling', {car})
  }

  function handleBack() {
    navigation.goBack()
  }

  useEffect(() => {
    async function fetchOnlineData() {
      const response = await api.get(`cars/${car.id}`);
      setCarUpdate(response.data);
    }

    if(!!netInfo.isConnected) fetchOnlineData()
  },[netInfo.isConnected])


  return (
    <Container>
      <StatusBar 
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"      
      />

      <Animated.View
        style={[
          headerStyleAnimation, 
          styles.header,
          { backgroundColor: theme.colors.background_secondary}
        ]}
      >
        <Header>
          <BackButton onPress={handleBack}  />
        </Header>

        <Animated.View style={sliderCarsStyleAnimation}>
          <CarImages>
            <ImageSlider
              imagesUrl={
                !!carUpdate.photos ? 
                carUpdate.photos : [{ id: car.thumbnail, photo: car.thumbnail }]
              } 
            />
          </CarImages>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight() + 160,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.period}</Period>
            <Price>R$ {!!netInfo.isConnected ? car.price : '...'}</Price>
          </Rent>
        </Details>

        {
          carUpdate.accessories &&
          <Accessories>
            {
              carUpdate.accessories.map(accessory => (
                <Accessory 
                  key={accessory.type}
                  name={accessory.name}
                  icon={getAccessoryIcon(accessory.type)}
                />
              ))
            }
          </Accessories>
        }

        <About>
          {car.about}
        </About>

    </Animated.ScrollView>

    <Footer>
      <Button 
        title="Escolher per??odo do aluguel" 
        onPress={handleConfirmRental}
        enabled={!!netInfo.isConnected}
      />

      {
        !netInfo.isConnected &&
        <OfflineInfo>
        Conecte-se a internet para ver mais detalhes e agendar seu carro.
        </OfflineInfo>
      }
    </Footer>
  </Container>
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    overflow: 'hidden', 
    zIndex: 1,
  },
})