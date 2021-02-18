import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../styles/colors";

import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from "./styles";
import Sugestions from "../../components/Sugestions";

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
      </Container>
    </Wrapper>
  );
};

export default Home;
