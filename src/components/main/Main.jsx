import React from "react";
import { img1, img2, img3 } from "../../assets/img/img";
import Carusel from "./Carusel/Carusel";
import Shipping from "./shipping/shipping";
import ThreeImg from "./ThreeImg/ThreeImg";

export const Main = () => {
  return (
    <>
      <Carusel />
      <Shipping />
      <ThreeImg img1={img1} img2={img2} img3={img3} />
    </>
  );
};
