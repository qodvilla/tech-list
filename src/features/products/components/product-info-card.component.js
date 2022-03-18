import React from "react";
import styled from 'styled-components/native';


const Text = styled.Text`
    font-size: ${({theme}) => theme.fontSizes.h1}
    color: ${({theme}) => theme.colors.text.primary}
`

export const Basic = () => {
  return <Text>Testing the theme</Text>;
};
