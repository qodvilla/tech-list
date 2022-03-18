import React from "react";
import { Card, Divider } from "react-native-paper";
import {
  DetailsCard,
  CardContent,
  Text,
  ParagraphText,
  CardActions,
  BuyButton,
  ButtonText
} from "./product-info-card.style";

export const ProductCard = () => (
  <DetailsCard>
    <Card.Cover
      source={{
        uri: "https://www.xda-developers.com/files/2021/10/Alienware-Aurora-front-and-back.jpg",
      }}
    />
    <Divider />
    <CardContent>
      <Text>Alienware Gaming PC</Text>
      <ParagraphText>R 48 999</ParagraphText>
      <ParagraphText>Sold by: Katrina</ParagraphText>
      <CardActions>
        <BuyButton mode="contained">
          <ButtonText>Buy</ButtonText>
        </BuyButton>
      </CardActions>
    </CardContent>
  </DetailsCard>
);
