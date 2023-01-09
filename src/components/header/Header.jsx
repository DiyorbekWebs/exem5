import React from "react";
import { Sling as Hamburger } from "hamburger-react";
import {
  AiOutlineHeart,
  BsBag,
  BsSearch,
  BsShuffle,
} from "../../assets/icons/icon";
import Logo from "../../assets/img/logo";
import style from "./header.module.scss";
import List from "./list";
import WishlistModal from "./modal/modal";
import useModal from "../../hooks/useModal";
// import HeaderModal from "./modal/headerModal";

export default function Header() {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <>
      <div className="container">
        <nav className={style.header__nav}>
          <div className={style.header__logo}>
            <Logo />
          </div>
          {/*Todo: logo*/}
          <List />
          <div className={style.header__tablet}>
            <ul className={style.header__icons}>
              <BsSearch className={style.header__icon} />
              <BsShuffle className={style.header__icon} />
              <AiOutlineHeart
                className={style.header__icon}
                onClick={() => openModal()}
              />
              {isOpen ? <WishlistModal props={closeModal} /> : ""}
              <BsBag className={style.header__icon} />
            </ul>
            <div className={style.header__burger}>
              <Hamburger rounded size={25} direction={"left"} duration={1} />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
