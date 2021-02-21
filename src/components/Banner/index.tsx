import React from "react";

import img13 from "../../assets/images/13.png";

import { Container, Details, Title, Description, Image } from "./styles";

const Banner: React.FC = () => {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>

        <Description>
          Matenha suas parcerias em dia, use o PicPay para fazer suas cobranças.
        </Description>
      </Details>
      <Image source={img13} />
    </Container>
  );
};

export default Banner;
