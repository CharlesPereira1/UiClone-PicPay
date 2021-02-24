import styled from "styled-components/native";
import Constants from "expo-constants";
import { Platform, StatusBar } from "react-native";

const statusBarHeight =
  Platform.OS === "android" ? Constants.statusBarHeight : 0;

export const Container = styled.View`
  padding-top: ${statusBarHeight + "px"};
`;
