import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  background: ${colors.banner};
  margin: 25px 16px;
  border-radius: 8px;
  height: 150px;
  flex-direction: row;
  padding: 15px;
  align-items: center;
`;

export const Details = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
`;
export const Description = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  margin-top: 15px;
`;

export const Image = styled.Image``;
