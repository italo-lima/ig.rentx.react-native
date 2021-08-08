import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';
import {
  Container,
  IconContainer,
  InputText,
  ChangePasswordVisibility,
} from './styles';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function PasswordInput({ iconName, value, ...rest }: InputProps) {
  const [visible, setVisible] = useState(true);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const theme = useTheme();

  function handleChangePasswordVisibility() {
    setVisible(prevState => !prevState);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }
  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container >
      <IconContainer isFocused={isFocused}>
        <Feather
          name={iconName}
          size={24}
          color={isFilled || isFocused ? theme.colors.main : theme.colors.title}
        />
      </IconContainer>
      <InputText
        isFocused={isFocused}
        secureTextEntry={visible}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        autoCorrect={false}
        {...rest}
      />
      <ChangePasswordVisibility onPress={handleChangePasswordVisibility}>
        <IconContainer>
          <Feather
            name={visible ? 'eye' : 'eye-off'}
            size={24}
            color={theme.colors.title}
          />
        </IconContainer>
      </ChangePasswordVisibility>
    </Container>
  );
}