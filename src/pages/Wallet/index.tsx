import React, { useState } from "react";
import { Switch } from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
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
  BodyCard,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  AddLabel,
  TicketButton,
  TicketLabel,
} from "./styles";

const Wallet: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  const handleVisible = () => {
    setIsVisible((prev) => !prev);
  };

  const handleBalance = () => {
    setUseBalance((prev) => !prev);
  };

  return (
    <Container>
      <Header
        colors={
          useBalance
            ? [colors.pastelGreen, colors.mountainMeadow]
            : [colors.lightGrey, colors.greyTwo]
        }
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? "159,90" : "-----"}</Bold>
            </Value>

            <EyesContent onPress={handleVisible}>
              <Feather
                name={isVisible ? "eye" : "eye-off"}
                size={28}
                color={colors.white}
              />
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

        <Switch value={useBalance} onValueChange={handleBalance} />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>formas de pagamento</PaymentMethodsTitle>

        <Card>
          <BodyCard>
            <CardDetails>
              <CardTitle>Cadastre seu cartão de creditos</CardTitle>
              <CardInfo>
                Cadastre seu cartão de crédito para poder fazer pagamentos mesmo
                quando não tiver saldo no seu PicPay
              </CardInfo>
            </CardDetails>

            <Img resizeMode="contain" source={creditCard} />
          </BodyCard>

          <AddButton>
            <AntDesign
              name="pluscircleo"
              size={30}
              color={colors.malachiteTwo}
            />
            <AddLabel>Adicionar cartão de crédito</AddLabel>
          </AddButton>
        </Card>

        <TicketButton>
          <MaterialCommunityIcons
            name="ticket-outline"
            size={20}
            color={colors.malachiteTwo}
          />

          <TicketLabel>Usar código promocional</TicketLabel>
        </TicketButton>
      </PaymentMethods>
    </Container>
  );
};

export default Wallet;
