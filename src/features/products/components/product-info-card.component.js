import React from "react";
import styled from "styled-components/native";
import { Button, Card, Title, Paragraph } from "react-native-paper";

const Text = styled(Title)`
    font-size: ${({ theme }) => theme.fontSizes.h5}
    color: ${({ theme }) => theme.colors.text.primary}
    font-family: ${({ theme }) => theme.fonts.heading}
`;

const DetailsCard = styled(Card)`
  margin: ${({ theme }) => theme.space[3]};
`;

const BuyButton = styled(Button).attrs({color: "#faae2b"})`
  padding: ${({ theme }) => theme.space[0]} ${({ theme }) => theme.space[3]};
`;
const CardActions = styled(Card.Actions)`
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[0]}
    ${({ theme }) => theme.space[0]};
`;

export const ProductCard = () => (
  <DetailsCard>
    <Card.Cover
      source={{
        uri: "https://www.xda-developers.com/files/2021/10/Alienware-Aurora-front-and-back.jpg",
      }}
    />
    <Card.Content>
      <Text>Alienware Gaming PC</Text>
      <Paragraph>R 48 999</Paragraph>
      <Paragraph>Sold by: Katrina</Paragraph>
      <CardActions>
        <BuyButton mode="contained">Buy</BuyButton>
      </CardActions>
    </Card.Content>
  </DetailsCard>
);
