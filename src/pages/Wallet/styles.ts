import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import Constants from "expo-constants";
import { Platform } from "react-native";

import colors from "../../styles/colors";

const statusBarHeight =
  Platform.OS === "android" ? Constants.statusBarHeight : 0;

export const Container = styled.View`
  background: ${colors.black};
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  padding-top: ${statusBarHeight + "px"};
  height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${colors.white};
`;

export const BalanceContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  font-size: 38px;
  color: ${colors.white};
  font-weight: 100;
`;

export const Bold = styled.Text`
  font-weight: 700;
`;

export const EyesContent = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Info = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  font-weight: 500;
`;

export const Actions = styled.View`
  flex-direction: row;
  margin-top: 40px;
`;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.whiteRgbaClear};
  width: 150px;
  height: 45px;
  border-radius: 25px;
  margin: 0 10px;
`;

export const ActionLabel = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  margin-left: 10px;
`;

export const UseBalance = styled.View`
  background: ${colors.balance};
  height: 60px;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: ${colors.payment};
  text-transform: uppercase;
`;

export const Card = styled.View`
  background: ${colors.card};
  border-radius: 8px;
  padding: 20px;
  flex-direction: column;
`;

export const BodyCard = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 10px;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.white};
`;

export const CardInfo = styled.Text`
  font-size: 14px;
  margin-top: 15px;
  color: ${colors.whiteRgbaClear};
`;

export const Img = styled.Image`
  width: 60px;
`;

export const AddButton = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const AddLabel = styled.Text`
  color: ${colors.malachiteTwo};
  font-weight: bold;
  font-size: 18px;
  margin-left: 10px;
`;
