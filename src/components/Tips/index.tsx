import React from "react";

import img8 from "../../assets/images/08.png";

import { Container, Option, Title, Img } from "./styles";

const Tips: React.FC = () => {
  return (
    <Container>
      <Option bgColor="#172c4a">
        <Title>Pague suas contas sem sair de casa</Title>

        <Img source={img8} />
      </Option>
    </Container>
  );
};

export default Tips;
