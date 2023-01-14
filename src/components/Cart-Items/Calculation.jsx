import React from "react";
import { BsTrash } from "react-icons/bs";
import styled from "styled-components";
import { card1, l1 } from "../../assets/img/img";
import Button from "../Button/Button";
import { Title } from "../main/ourProducts/OurProducts";
import stil from "../Button/button.module.scss";
import "./index.css";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
const Box = styled.div`
  background-color: #fff;
  padding: 55px 0px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 57px;
`;
const Th = styled.th`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
`;
const Tr = styled.tr`
  padding: 50px 50px !important;
  width: 100% !important;
  background-color: #5a5ac9;
  height: 50px;
`;
const Img = styled.img`
  width: 150px;
  height: 150px;
`;
const Input = styled.input`
  height: 54px;
  width: 80px;
  outline: none;
  text-align: center;
  cursor: pointer;
  border: 1px solid #ebebeb;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  background-color: #fff;
  text-align: center;
`;
const Text = styled.p`
  font-family: Poppins;
  font-size: 15px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;
  color: #212529;
`;
const Count = styled.div`
  display: flex;
`;
const Btns = styled.div`
  display: flex;
  flex-direction: column;
`;
const Btn = styled.button`
  padding: 3.8px 5px;
  border: 1px solid #ebebeb;
  background-color: #fff;
`;
const Stock = styled.div`
  height: 22px;
  width: 57.296875px;
  border-radius: 6px;
  padding: 4px 5px 6px 4px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: center;
  color: #fff;
  background-color: #5a5ac9;
`;
const Tr2 = styled.tr`
  background-color: #fff;
  border-bottom: 1px solid lightgray;
  height: 200px;
`;
const Td = styled.td`
  padding-right: 100px;
`;
const Table = styled.table`
  width: 100%;
  border: 1px solid #fff !important;
`;
const Calculation = () => {
  return (
    <Box>
      <div className="container">
        <Content>
          <Title>Your cart items</Title>
          <Table>
            <Tr bgcolor={"#5a5ac9"}>
              <Th>Product Image</Th>
              <Th>Product Name</Th>
              <Th>Stock Status</Th>
              <Th>Qty</Th>
              <Th>Price</Th>
              <Th>action</Th>
              <Th>Checkout</Th>
            </Tr>
            <Tr2>
              <td align="center">
                <Img src={card1} />
              </td>
              <td align="center">
                <Text>Water and Wind Resistant cream</Text>
              </td>
              <td align="center">
                <Stock>In Stock</Stock>
              </td>
              <td align="center">
                <Count align="center">
                  <Input
                    align="center"
                    type={"number"}
                    defaultValue={1}
                    disabled
                    min={1}
                    max={10}
                    step={1}
                  />
                  <Btns align="center">
                    <Btn>
                      <CgChevronUp />
                    </Btn>
                    <Btn>
                      <CgChevronDown />
                    </Btn>
                  </Btns>
                </Count>
              </td>
              <td align="center">
                <Text>$38.24</Text>
              </td>
              <td align="center">
                <BsTrash />
              </td>
              <td align="center">
                <Button clasS={stil.button2}>add to cart</Button>
              </td>
            </Tr2>

            <Tr2>
              <td align="center">
                <Img src={card1} />
              </td>
              <td align="center">
                <Text>Water and Wind Resistant cream</Text>
              </td>
              <td align="center">
                <Stock>In Stock</Stock>
              </td>
              <td align="center">
                <Count align="center">
                  <Input
                    align="center"
                    type={"number"}
                    defaultValue={1}
                    disabled
                    min={1}
                    max={10}
                    step={1}
                  />
                  <Btns align="center">
                    <Btn>
                      <CgChevronUp />
                    </Btn>
                    <Btn>
                      <CgChevronDown />
                    </Btn>
                  </Btns>
                </Count>
              </td>
              <td align="center">
                <Text>$38.24</Text>
              </td>
              <td align="center">
                <BsTrash />
              </td>
              <td align="center">
                <Button clasS={stil.button2}>add to cart</Button>
              </td>
            </Tr2>

            <Tr2>
              <td align="center">
                <Img src={card1} />
              </td>
              <td align="center">
                <Text>Water and Wind Resistant cream</Text>
              </td>
              <td align="center">
                <Stock>In Stock</Stock>
              </td>
              <td align="center">
                <Count align="center">
                  <Input
                    align="center"
                    type={"number"}
                    defaultValue={1}
                    disabled
                    min={1}
                    max={10}
                    step={1}
                  />
                  <Btns align="center">
                    <Btn>
                      <CgChevronUp />
                    </Btn>
                    <Btn>
                      <CgChevronDown />
                    </Btn>
                  </Btns>
                </Count>
              </td>
              <td align="center">
                <Text>$38.24</Text>
              </td>
              <td align="center">
                <BsTrash />
              </td>
              <td align="center">
                <Button clasS={stil.button2}>add to cart</Button>
              </td>
            </Tr2>
          </Table>
        </Content>
      </div>
    </Box>
  );
};

export default Calculation;
