import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const Header = styled.View``;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
`;

export const Card = styled.View`
  background: ${colors.blackPeal};
  border-radius: 8px;
  margin-top: 20px;
  padding: 15px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image``;

export const Description = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  margin-left: 15px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const CardBody = styled.View`
  margin-top: 20px;
`;

export const UserName = styled.Text`
  color: ${colors.white};
  font-size: 20px;
`;

export const CardFooter = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: ${colors.frenchRose};
  font-size: 14px;
  font-weight: bold;
`;

export const Divider = styled.View`
  width: 2px;
  height: 13px;
  background: ${colors.divider};
  margin: 0 10px;
`;

export const DateLabel = styled.Text`
  color: ${colors.white};
  margin-left: 5px;
`;

export const Action = styled.View`
  flex-direction: row;
`;

export const Option = styled.TouchableOpacity`
  margin-left: 15px;
  flex-direction: row;
  align-items: center;
`;

export const OptionLabel = styled.Text`
  color: ${colors.white};
  font-size: 14px;
  margin-left: 5px;
`;
