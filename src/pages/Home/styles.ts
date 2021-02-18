import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Wrapper = styled.View`
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
