import React from "react";
import { Feather } from "@expo/vector-icons";

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
        </HeaderContainer>
      </Header>
    </Container>
  );
};

export default Wallet;
