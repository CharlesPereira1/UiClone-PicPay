import React from "react";

import colors from "../../styles/colors";

import { Container, Header, HeaderContainer, Title } from "./styles";

const Wallet: React.FC = () => {
  return (
    <Container>
      <Header colors={[colors.pastelGreen, colors.mountainMeadow]}>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>
        </HeaderContainer>
      </Header>
    </Container>
  );
};

export default Wallet;
