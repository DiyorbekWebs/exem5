import React from "react";
import { Box, Content, Line, Paragrf, Title } from "../ourProducts/OurProducts";
import { Carusel2 } from "../responsCarusel/Carusel";
import { ImageGallery } from "../../../config/base";
import Cardd from "./Cardd";
const Latest = () => {
  return (
    <div>
      <Box style={{ marginBottom: "100px" }}>
        <div className="container">
          <Content>
            <Title>From Our Latest Blogs</Title>
            <Line />
            <Paragrf>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos, repellat.
            </Paragrf>
            <Carusel2>
              {ImageGallery?.map((i) => (
                <Cardd props={i} />
              ))}
            </Carusel2>
          </Content>
        </div>
      </Box>
    </div>
  );
};

export default Latest;
