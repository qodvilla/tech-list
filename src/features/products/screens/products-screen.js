import React from "react";
import styled from "styled-components/native";
import { StatusBar, Platform, SafeAreaView, FlatList } from "react-native";
import { ProductCard } from "../components/product-info-card.component";

const isAndroid = Platform.OS === "android";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  padding-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;
const ProductsScreenView = styled.View`
  flex: 1;
`;

export const ProductsScreen = () => {
  const renderItem = ({ item, index, seperators }) => {
    return (
      <ProductCard
        itemName={item.title}
        itemPrice={item.price}
        itemSeller={item.seller}
        itemImage={item.image}
      />
    );
  };
  return (
    <SafeArea>
      <ProductsScreenView>
        <FlatList
          data={[
            {
              id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
              title: "Alienware Gaming PC",
              price: "R49 999",
              image:
                "https://www.xda-developers.com/files/2021/10/Alienware-Aurora-front-and-back.jpg",
              seller: "Vincent",
            },
            {
              id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
              title: "Sony Headphones X3",
              price: "R9 999",
              image:
                "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              seller: "Sony",
            },
            {
              id: "58694a0f-3da1-471f-bd96-145571e29d72",
              title: "IK Blue Light Blockers",
              price: "R4 999",
              image:
                "https://images.pexels.com/photos/947885/pexels-photo-947885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
              seller: "IK Italy",
            },
          ]}
          renderItem={renderItem}
        />
      </ProductsScreenView>
    </SafeArea>
  );
};
