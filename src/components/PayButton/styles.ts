import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../../styles/colors";

interface Props {
  focused: boolean;
}

export const Button = styled(LinearGradient)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text<Props>`
  color: ${({ focused }) => (focused ? colors.black : colors.white)};
  font-size: 12px;
`;
