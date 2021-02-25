import React from "react";
import { Switch } from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

import colors from "../../styles/colors";

import {
  Container,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyesContent,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
} from "./styles";

const Wallet: React.FC = () => {
  return (
    <Container>
      <Header colors={[colors.pastelGreen, colors.mountainMeadow]}>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>159,90</Bold>
            </Value>

            <EyesContent>
              <Feather name="eye" size={28} color={colors.white} />
            </EyesContent>
          </BalanceContainer>

          <Info>Seu saldo está rendendo 100% do CDI.</Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons
                name="cash"
                size={25}
                color={colors.white}
              />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>
            <Action>
              <FontAwesome name="bank" size={18} color={colors.white} />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>

        <Switch />
      </UseBalance>
    </Container>
  );
};

export default Wallet;
