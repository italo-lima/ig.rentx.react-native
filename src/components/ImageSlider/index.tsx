import React, { useState } from 'react';

import {
  CarImageWrapper,
  Container,
  ImageIndexes,
  CarImage
} from './styles';

interface Props {
  imagesUrl: string[]
}

export function ImageSlider({imagesUrl}:Props) {
  const [imageIndex, setImageIndex] = useState(0);
  
  return (
    <Container>
      <ImageIndexes>
   
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage
          source={{ uri: imagesUrl[0] }}
          resizeMode="contain"
        />
      </CarImageWrapper>
    </Container>
  )
}