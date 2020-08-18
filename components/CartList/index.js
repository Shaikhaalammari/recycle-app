import React from "react";
import { observer } from "mobx-react";
import cartStore from "../../stores/cartStore";
import productStore from "../../stores/productStore";
import CartItem from "./CartItem";
import { List } from "native-base";

const CartList = () => {
  const cartList = cartStore.items
    .map((item) => ({
      ...productStore.getProductById(item.productId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.name} />);

  return <List>{cartList}</List>;
};

export default observer(CartList);
