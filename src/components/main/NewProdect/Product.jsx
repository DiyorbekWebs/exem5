import React from "react";
import { Box, Content, Line, Paragrf, Title } from "../ourProducts/OurProducts";
import { Carusel2 } from "../responsCarusel/Carusel";
import { Products } from "../../../config/base";
import Card from "../../Card/Card";
import styled from "styled-components";
const Paragrf2=styled(Paragrf)`
  @media (max-width: 430px) {
    margin-bottom: 50px;
  }
`
export default function Product() {
  return (
    <Box style={{ marginBottom: "40px" }}>
      <div className="container">
        <Content>
          <Title>New Arrival products</Title>
          <Line />
          <Paragrf2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Paragrf2>
          <Carusel2>
            {Products?.map((i) =>
              i.category === "new" ? <Card props={i} /> : null
            )}
          </Carusel2>
        </Content>
      </div>
    </Box>
  );
}
