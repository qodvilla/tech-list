import React from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { Platform } from "react-native";
import { ProductCard } from '../components/product-info-card.component';

const isAndroid = Platform.OS === "android";

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
        <ProductCard />
      </ProductsScreenView>
    </SafeArea>
  );
};
