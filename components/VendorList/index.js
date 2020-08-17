import React, { useState } from "react";
import { observer } from "mobx-react";
import vendorStore from "../../stores/vendorStore";
import { View, Text } from "react-native";
import { List, Content } from "native-base";
import VendorItem from "./VendorItem";

const VendorList = ({ navigation, route }) => {
  if (vendorStore.loading) return <Text>Loading</Text>;

  const vendorList = vendorStore.vendors.map((vendor) => (
    <VendorItem vendor={vendor} key={vendor.id} navigation={navigation} />
  ));
  return (
    <Content>
      <List>{vendorList}</List>
    </Content>
  );
};

export default observer(VendorList);
