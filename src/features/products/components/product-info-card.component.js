import React from "react";
import styled from 'styled-components/native';


const Text = styled.Text`
    font-size: ${({theme}) => theme.fontSizes.title}
    color: ${({theme}) => theme.colors.text.primary}
    font-family: ${({theme}) => theme.fonts.body}
`

export const Basic = () => {
  return <Text>Testing the theme</Text>;
};
