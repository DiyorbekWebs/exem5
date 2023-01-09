import React from "react";
import { CgClose } from "react-icons/cg";
import stylee from "./modal.module.scss";

export default function ModalCard() {
  return (
    <>
      <li className={stylee.modal__card}>
        <img src="https://picsum.photos/id/237/100/100" className={stylee.modal__cardImg} alt="cardImg" />
        <div className={stylee.modal__texts}>
            <p className={stylee.modal__text1}>Orginal Age Defying Cosmetics Makeup</p>
            <p className={stylee.modal__text1}>1 x $100.00</p>
        </div>
        <CgClose/>
      </li>
    </>
  );
}
