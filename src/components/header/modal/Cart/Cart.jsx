import React from "react";
import stylee from "../modal.module.scss";
import { CgClose } from "react-icons/cg";
import ModalCard from "../modalCard";
import { BsBag } from "react-icons/bs";
import useModal from "../../../../hooks/useModal";
import Button from "../../../Button/Button";
import stil from '../../../Button/button.module.scss'
export default function CartModal({ props }) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <BsBag className={stylee.modal__icon} onClick={() => openModal()} />
      {isOpen ? (
        <div className={stylee.modal}>
          <div className={stylee.modal__box}>
            <div className={stylee.modal__close}>
              <h1 className={stylee.modal__title}>Cart</h1>
              <CgClose
                className={stylee.modal__closeBtn}
                onClick={() => closeModal()}
              />
            </div>
            <ul className={stylee.modal__cardList}>
              <ModalCard />
              <ModalCard />
              <ModalCard />
            </ul>
            <Button clasS={stil.button} style={{marginRight: '10px'}}>view cart</Button>
            <Button clasS={stil.button2}>Checkout</Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
