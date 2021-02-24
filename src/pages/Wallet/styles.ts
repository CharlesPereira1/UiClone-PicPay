import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import Constants from "expo-constants";
import { Platform, StatusBar } from "react-native";

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
