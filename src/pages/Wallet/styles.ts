import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../../styles/colors";

export const Container = styled.View`
  background: ${colors.black};
  flex: 1;
`;

export const Header = styled(LinearGradient)`
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
