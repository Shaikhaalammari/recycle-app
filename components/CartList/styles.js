import styled from "styled-components/native";
import { Icon, Text } from "native-base";

export const TotalPrice = styled.Text`
  color: #fe91ca;
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;

export const TrashIcon = styled(Icon)`
  color: #91d18b;
`;

export const CheckoutButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #91d18b;
  margin-top: 30px;
`;

export const CheckoutButtonText = styled.Text`
  color: #ffffff;

  font-size: 18px;
`;
