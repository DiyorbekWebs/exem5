import React from "react";
import { Box, Content, Line, Paragrf, Title } from "../ourProducts/OurProducts";
import { Carusel2 } from "../responsCarusel/Carusel";

export default function Product() {
  return (
    <Box style={{marginBottom:"100px"}}>
      <div className="container">
        <Content>
          <Title>New Arrival products</Title>
          <Line />
          <Paragrf>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos, repellat.
          </Paragrf>
          <Carusel2 />
        </Content>
      </div>
    </Box>
  );
}
