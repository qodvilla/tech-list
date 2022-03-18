import React from "react";
import { Card, Divider } from "react-native-paper";
import {
  DetailsCard,
  CardContent,
  CardActions,
  BuyButton,
  ButtonText,
} from "./product-info-card.style";
import { Text } from "../../../components/typography/typography.component";
import { Spacer } from "../../../components/Spacer/Spacer.component";

export const ProductCard = ({itemName, itemPrice, itemSeller, itemImage}) => (
  <DetailsCard>
    <Card.Cover
      source={{
        uri: itemImage,
      }}
    />
    <Divider />
    <CardContent>
      <Text variant="innerTitle">{itemName}</Text>
      <Spacer position="top" size="small">
        <Text variant="label">{itemPrice}</Text>
      </Spacer>
      <Spacer position="top" size="large">
        <Text variant="caption">Sold by: {itemSeller}</Text>
      </Spacer>
      <CardActions>
        <BuyButton mode="contained">
          <ButtonText>Buy</ButtonText>
        </BuyButton>
      </CardActions>
    </CardContent>
  </DetailsCard>
);
