import React from "react";
import { Text } from "react-native";
import { ListItem } from "native-base";
//styles
import { VendorItemStyled } from "./styles";

const VendorItem = ({ vendor, navigation }) => {
  return (
    <ListItem
      onPress={() => navigation.navigate("Products", { vendor: vendor })}
    >
      <VendorItemStyled>{vendor.name}</VendorItemStyled>
    </ListItem>
  );
};

export default VendorItem;
