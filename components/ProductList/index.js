import React, { useState } from "react";
import { observer } from "mobx-react";
import { View, Text } from "react-native";
import { List, Content } from "native-base";
import productStore from "../../stores/productStore";

const ProductList = () => {
  if (vendorStore.loading) return <Text>Loading</Text>;
  const ProductList = productStore.products.map((product) => (
    <ProductItemItem product={product} key={product.id} />
  ));
  return (
    <Content>
      <List>{ProductList}</List>
    </Content>
  );
};

export default observer(ProductList);
