import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import Home from "../Home";
import VendorList from "../VendorList";
import ProductList from "../ProductList";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#90d4ed",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen name="Vendors" component={VendorList} />
      <Screen
        name="Products"
        component={ProductList}
        options={({ route }) => {
          const { vendor } = route.params;
          return {
            title: vendor.name,
          };
        }}
      />
    </Navigator>
  );
};

export default RootNavigator;
