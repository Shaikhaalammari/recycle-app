import React from "react";
import { observer } from "mobx-react";
import { View, Text } from "react-native";
import { List, Content } from "native-base";
import vendorStore from "../../stores/vendorStore";
import productStore from "../../stores/productStore";
import ProductItem from "./ProductItem";

const ProductList = ({ route }) => {
  if (vendorStore.loading) return <Text>Loading</Text>;
  const { vendor } = route.params;
  const productList = vendor.cookies // because i was using laila's BE
    .map((product) => productStore.getProductById(product.id))
    .map((product) => <ProductItem product={product} key={product.id} />);
  return (
    <Content>
      <List>{productList}</List>
    </Content>
  );
};

export default observer(ProductList);
