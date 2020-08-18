import React, { useState } from "react";
import { ListItem, Left, Right, Button, Text } from "native-base";
import NumericInput from "react-native-numeric-input";

//styles
import { VendorItemStyled } from "../VendorList/styles";
//stores
import cartStore from "../../stores/cartStore";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    const newItem = { quantity, productId: product.id };
    console.log("handleAdd -> newItem", newItem);
    cartStore.addItemToCart(newItem);
  };

  return (
    <ListItem>
      <Left>
        <VendorItemStyled>{product.name}</VendorItemStyled>
      </Left>
      <Right>
        <NumericInput
          value={quantity}
          onChange={setQuantity}
          rounded
          textColor="#91d18b"
          rightButtonBackgroundColor="#edaaaa"
          totalHeight={30}
          totalWidth={70}
          initValue={1}
        />

        <Button onPress={handleAdd}>
          <Text>Add</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default ProductItem;
