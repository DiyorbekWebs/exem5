import React from "react";
import { BsChevronRight } from "react-icons/bs";
import styled from "styled-components";
import { Line, Title } from "../main/ourProducts/OurProducts";
const Box = styled.div`
  background-color: #f6f6f6;
  padding: 115px 0px;

  @media (max-width: 430px) {
    padding: 100px 0px;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 22px;
`;
const Text = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: #000;
`;
const Path = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const TextName = styled(Text)`
  color: #5a5ac9;
  font-size: 18px;
`;
const PageName = ({ name = "Cart" }) => {
  return (
    <Box>
      <div className="container">
        <Content>
          <Title>{name}</Title>
          <Line style={{ marginBottom: "23px" }} />
          <Path>
            <Text>Home</Text>
            <BsChevronRight />
            <TextName>{name}</TextName>
          </Path>
        </Content>
      </div>
    </Box>
  );
};

export default PageName;
