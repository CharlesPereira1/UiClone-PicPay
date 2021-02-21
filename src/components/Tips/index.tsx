import React from "react";

import img8 from "../../assets/images/08.png";
import img9 from "../../assets/images/09.png";
import img10 from "../../assets/images/10.png";
import img11 from "../../assets/images/11.png";
import img12 from "../../assets/images/12.png";
import colors from "../../styles/colors";

import { Container, Option, Title, Img } from "./styles";

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: "Pague suas contas sem sair de casa",
    bgColor: colors.img8,
  },
  {
    key: String(Math.random()),
    img: img9,
    title: "Pague suas contas sem sair de casa",
    bgColor: colors.img9,
  },
  {
    key: String(Math.random()),
    img: img10,
    title: "Pague suas contas sem sair de casa",
    bgColor: colors.img10,
  },
  {
    key: String(Math.random()),
    img: img11,
    title: "Pague suas contas sem sair de casa",
    bgColor: colors.img11,
  },
  {
    key: String(Math.random()),
    img: img12,
    title: "Pague suas contas sem sair de casa",
    bgColor: colors.img12,
  },
];

const Tips: React.FC = () => {
  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.title}</Title>

          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
};

export default Tips;
