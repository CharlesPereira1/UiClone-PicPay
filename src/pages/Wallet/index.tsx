import React from "react";
import { Switch } from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

import creditCard from "../../assets/images/credit-card.png";

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
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
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

      <PaymentMethods>
        <PaymentMethodsTitle>formas de pagamento</PaymentMethodsTitle>

        <Card>
          <CardDetails>
            <CardTitle>Cadastre seu cartão de creditos</CardTitle>
            <CardInfo>
              Cadastre seu cartão de crédito para poder fazer pagamentos mesmo
              quando não tiver saldo no seu PicPay
            </CardInfo>
          </CardDetails>

          <Img resizeMode="contain" source={creditCard} />
        </Card>
      </PaymentMethods>
    </Container>
  );
};

export default Wallet;
