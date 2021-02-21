import styled from "styled-components/native";
import colors from "../../styles/colors";

interface ContainerProps {
  bgColor?: string;
}

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 16,
  },
}))`
  margin-top: 25px;
`;

export const Option = styled.TouchableOpacity<ContainerProps>`
  background: ${({ bgColor }) => bgColor};
  width: 150px;
  height: 230px;
  border-radius: 8px;
  padding: 15px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
`;

export const Img = styled.Image`
  align-self: center;
`;
