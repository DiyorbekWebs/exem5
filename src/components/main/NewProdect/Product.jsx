import React from "react";
import { Box, Content, Line, Paragrf, Title } from "../ourProducts/OurProducts";
import { Carusel2 } from "../responsCarusel/Carusel";
import { Products } from "../../../config/base";
import Card from "../../Card/Card";

export default function Product() {
  return (
    <Box style={{ marginBottom: "100px" }}>
      <div className="container">
        <Content>
          <Title>New Arrival products</Title>
          <Line />
          <Paragrf>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Paragrf>
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
