import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Sugestions from "../../components/Sugestions";
import Activities from "../../components/Activities";
import Tips from "../../components/Tips";

import colors from "../../styles/colors";

import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from "./styles";
import Banner from "../../components/Banner";

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color={colors.malachite}
          />

          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 0,00</Balance>
          </BalanceContainer>

          <MaterialCommunityIcons
            name="gift"
            size={30}
            color={colors.malachite}
          />
        </Header>

        <Sugestions />

        <Activities />

        <Tips />

        <Banner />
      </Container>
    </Wrapper>
  );
};

export default Home;
