import React, { useState } from "react";
import { observer } from "mobx-react";
import vendorStore from "../../stores/vendorStore";
import { View, Text } from "react-native";
import { List, Content } from "native-base";

const VendorList = () => {
  if (vendorStore.loading) return <Text>Loading</Text>;
  const VendorList = vendorStore.vendors.map((vendor) => (
    <vendorItem vendor={vendor} key={vendor.id} />
  ));
  return (
    <Content>
      <List>{VendorList}</List>
    </Content>
  );
};

export default observer(VendorList);
