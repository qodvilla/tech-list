import React from "react";
import { SafeAreaView } from "react-native";
import { Basic } from "../components/product-info-card.component";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { Platform } from "react-native";

const isAndroid = Platform.OS === "android";

console.log(isAndroid && " super slime!")
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.bg.primary};
  padding-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;
const ProductsScreenView = styled.View`
  flex: 1;
`;

export const ProductsScreen = () => {
  return (
    <SafeArea>
      <ProductsScreenView>
        <Basic />
      </ProductsScreenView>
    </SafeArea>
  );
};
