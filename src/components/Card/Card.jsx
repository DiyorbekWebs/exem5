import React from "react";
import styled from "styled-components";
import { product1 } from "../../assets/img/img";
import ReactStars from "react-rating-stars-component";
import { FiShoppingCart } from "react-icons/fi";
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
      align-items: center;
  box-shadow: 0px 0px 10px lightgrey;
`;
const Img = styled.img`
  height: 300px;
  width: 300px;
`;
const H1 = styled.h1`
  font-family: Raleway;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  transition: 0.5s;

  &:hover {
    transition: 0.5s;
    color: #5a5ac9;
  }
`;
const Texts = styled.div`
  padding: 17px 18px 24px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const PriceBox = styled.div`
  display: flex;
  gap: 178px;
  align-items: center;
`;
const Price = styled.div`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;
const Icon = styled.div`
padding: 15px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: #f6f6f6;
  transition: 0.5s;

  &:hover {
    transition: 0.5s;
    background-color: #5a5ac9;
    color: #fff;
  }
`;
const AiOutlineShoppingCar = styled(FiShoppingCart)`
  font-size: 18px;
  
`;
export default function Card() {
  return (
    <Box>
      <Img src={product1} />
      <Texts>
        <H1>All Natural Makeup Beauty Cosmetics</H1>
        <ReactStars count={5} value={5} size={24} activeColor="#ffd700" />
        <PriceBox>
          <Price>$11.90</Price>
          <Icon>
            <AiOutlineShoppingCar />
          </Icon>
        </PriceBox>
      </Texts>
    </Box>
  );
}
