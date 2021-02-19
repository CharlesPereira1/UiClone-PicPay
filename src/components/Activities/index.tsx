import React from "react";
import { Feather, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import avatar from "../../assets/images/avatar.png";

import colors from "../../styles/colors";

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  DateLabel,
  Action,
  Option,
  OptionLabel,
} from "./styles";

const Activities: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Vôce</Bold> pagou a <Bold>@charlespereira1</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Charles Pereira</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 198,00</Value>

            <Divider />

            <Feather name="lock" color={colors.white} size={14} />
            <DateLabel>há 2 anos</DateLabel>
          </Details>

          <Action>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                color={colors.white}
                size={14}
              />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <AntDesign name="heart" color={colors.white} size={14} />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Action>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Activities;
