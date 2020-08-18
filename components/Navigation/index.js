import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Home from "../Home";
import VendorList from "../VendorList";
import ProductList from "../ProductList";
import CartList from "../CartList";

//button
import CartButton from "../buttons/CartButton";
//Stores
import cartStore from "../../stores/cartStore";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#a2de96",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="Vendors"
        component={VendorList}
        options={{ headerRight: () => <CartButton /> }}
      />
      <Screen
        name="Products"
        component={ProductList}
        options={({ route }) => {
          const { vendor } = route.params;
          return {
            title: vendor.name,
          };
        }}
        options={{ headerRight: () => <CartButton /> }}
      />
      <Screen name="Cart" component={CartList} />
    </Navigator>
  );
};

export default RootNavigator;
