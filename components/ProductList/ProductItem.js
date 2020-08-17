import React from "react";
import { ListItem } from "native-base";
//styles
import { VendorItemStyled } from "../VendorList/styles";

const ProductItem = ({ product }) => {
  return (
    <ListItem>
      <VendorItemStyled>{product.name}</VendorItemStyled>
    </ListItem>
  );
};

export default ProductItem;
