import React from "react";
import style from "./header.module.scss"
export default function Dropdow1({text1}) {
  return (
    <>
      <div className={style.header__homeDrop}>
        <div
          className={style.header_homeItem}
          style={{
            padding: "10px",
            border: "1px solid transparent",
            borderBottomColor: "black",
          }}
        >
          <p className={style.header__item}>Home 1</p>
        </div>
        <div className={style.header_homeItem} style={{ padding: "10px" }}>
          <p className={style.header__item}>Home 2</p>
        </div>
      </div>
    </>
  );
}
