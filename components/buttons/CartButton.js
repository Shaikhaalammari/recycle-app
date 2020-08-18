import React from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";
//styles
import { CartButtonStyled, CartTextStyled } from "./styles";
//native
import { Button } from "native-base";
import cartStore from "../../stores/cartStore";

const CartButton = () => {
  const navigation = useNavigation();

  return (
    <Button transparent light onPress={() => navigation.navigate("Cart")}>
      <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>
      <CartButtonStyled
        type="AntDesign"
        name="shoppingcart"
        onPress={() => navigation.navigate("Cart")}
      />
    </Button>
  );
};

export default observer(CartButton);
