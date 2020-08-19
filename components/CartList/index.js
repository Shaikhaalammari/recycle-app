import React from "react";
import { observer } from "mobx-react";
import authStore from "../../stores/authStore";
import cartStore from "../../stores/cartStore";
import productStore from "../../stores/productStore";
import CartItem from "./CartItem";
import { Content } from "native-base";
import { Alert } from "react-native";
//styles
import { CheckoutButtonText, CheckoutButton } from "./styles";

const CartList = ({ navigation }) => {
  const handleCheckout = () => {
    if (authStore.user) cartStore.checkoutCart;
    else {
      Alert.alert(
        "Signin",
        "You need to sign in before completing your order",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };

  const cartList = cartStore.items
    .map((item) => ({
      ...productStore.getProductById(item.productId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.name} />);

  return (
    <Content>
      {cartList}
      <CheckoutButton onPress={handleCheckout}>
        <CheckoutButtonText>Checkout</CheckoutButtonText>
      </CheckoutButton>
    </Content>
  );
};

export default observer(CartList);
