import React from "react";
import stylee from "./modal.module.scss";
import { CgClose } from "react-icons/cg";
import ModalCard from "./modalCard";
import Button from "../../Button/Button";
export default function CartModal({ props }) {
  console.log(props);
  return (
    <>
      <div className={stylee.modal} >
        <div className={stylee.modal__box}>
          <div className={stylee.modal__close}>
            <h1 className={stylee.modal__title}>Cart</h1>
            <CgClose className={stylee.modal__closeBtn} onClick={props}/>  
          </div>
          <ul className={stylee.modal__cardList}>
            <ModalCard/>
            <ModalCard/>
            <ModalCard/>
          </ul>
          <Button>view wishlist</Button>
        </div>
      </div>
    </>
  );
}
