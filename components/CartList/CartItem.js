import React from "react";
import { observer } from "mobx-react";
import { ListItem, Body, Text, Right } from "native-base";
//Store
import cartStore from "../../stores/cartStore";

import { TotalPrice, TrashIcon } from "./styles";

const CartItem = ({ item }) => {
  return (
    <ListItem>
      <Body>
        <Text>{item.name}</Text>
        <Text note>
          {item.price} KD x {item.quantity}
        </Text>
        <TotalPrice>{item.price * item.quantity} KD</TotalPrice>
      </Body>
      <Right>
        <TrashIcon
          type="FontAwesome"
          name="trash-o"
          onPress={() => cartStore.removeItemFromCart(item.id)}
        />
      </Right>
    </ListItem>
  );
};

export default observer(CartItem);
