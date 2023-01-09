import React from "react";
import style from "../header.module.scss";
import {
  AiOutlineHeart,
  BsBag,
  BsSearch,
  BsShuffle,
} from "../../../assets/icons/icon";
export default function HeaderModal() {
  return (
    <>
      <div className={style.header__modal}>
        <ul className={style.header__icons}>
          <BsSearch className={style.header__icon} />
          <BsShuffle className={style.header__icon} />
          <AiOutlineHeart className={style.header__icon} />
          <BsBag className={style.header__icon} />
        </ul>
      </div>
    </>
  );
}
