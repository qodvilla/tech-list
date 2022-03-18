import React from "react";
import { Card, Divider } from "react-native-paper";
import {
  DetailsCard,
  CardContent,
  ParagraphText,
  CardActions,
  BuyButton,
  ButtonText
} from "./product-info-card.style";
import { Text } from "../../../components/typography/typography.component";

export const ProductCard = () => (
  <DetailsCard>
    <Card.Cover
      source={{
        uri: "https://www.xda-developers.com/files/2021/10/Alienware-Aurora-front-and-back.jpg",
      }}
    />
    <Divider />
    <CardContent>
      <Text variant="innerTitle">Alienware Gaming PC</Text>
      <Text variant="label">R48 999</Text>
      <Text variant="caption">Sold by: Katrina</Text>
      <CardActions>
        <BuyButton mode="contained">
          <ButtonText>Buy</ButtonText>
        </BuyButton>
      </CardActions>
    </CardContent>
  </DetailsCard>
);
