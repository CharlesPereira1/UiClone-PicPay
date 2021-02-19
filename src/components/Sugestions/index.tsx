import React from "react";

import { Container, Options, Img, Label } from "./styles";

import Img1 from "../../assets/images/01.png";
import Img2 from "../../assets/images/02.png";
import Img3 from "../../assets/images/03.png";
import Img4 from "../../assets/images/04.png";
import Img5 from "../../assets/images/05.png";
import Img6 from "../../assets/images/06.png";
import Img7 from "../../assets/images/07.png";

const items = [
  {
    key: String(Math.random()),
    img: Img1,
    label: "Recarga",
  },
  {
    key: String(Math.random()),
    img: Img2,
    label: "Uber",
  },
  {
    key: String(Math.random()),
    img: Img3,
    label: "Ônibus",
  },
  {
    key: String(Math.random()),
    img: Img4,
    label: "TV",
  },
  {
    key: String(Math.random()),
    img: Img5,
    label: "Doações",
  },
  {
    key: String(Math.random()),
    img: Img6,
    label: "Barras",
  },
  {
    key: String(Math.random()),
    img: Img7,
    label: "FAQ",
  },
];

const Sugestions: React.FC = () => {
  return (
    <Container>
      {items.map((item) => (
        <Options key={item.key}>
          <Img source={item.img} />
          <Label>{item.label}</Label>
        </Options>
      ))}
    </Container>
  );
};

export default Sugestions;
