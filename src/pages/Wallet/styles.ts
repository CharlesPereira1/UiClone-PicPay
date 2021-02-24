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
