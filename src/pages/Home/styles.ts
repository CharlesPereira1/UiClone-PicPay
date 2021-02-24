import styled from "styled-components/native";
import Constants from "expo-constants";
import { Platform, StatusBar } from "react-native";

import colors from "../../styles/colors";

const statusBarHeight =
  Platform.OS === "android" ? Constants.statusBarHeight : 0;

export const Wrapper = styled.View`
  padding-top: ${statusBarHeight + "px"};
  flex: 1;
  background: ${colors.black};
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const BalanceContainer = styled.View``;

export const BalanceTitle = styled.Text`
  color: ${colors.whiteRgbaClear};
  font-size: 14px;
  text-align: center;
`;

export const Balance = styled.Text`
  color: ${colors.white};
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;
