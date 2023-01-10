import React from "react";
import { IoIosArrowDown } from "../../../assets/icons/icon";
import style from "../headertop/headerTop.module.scss";
export default function List() {
  return (
    <ul className={style.HeaderTop__list}>
      <li className={style.HeaderTop__item} style={{ color: "#fff" }}>
        Settings <IoIosArrowDown style={{ fontSize: "14px" }} />
        <div className={style.HeaderTop__homeDrop}>
          <div
            className={style.HeaderTop__homeItem}
            style={{
              padding: "10px",
              border: "1px solid transparent",
              borderBottomColor: "grey",
            }}
          >
            <p className={style.HeaderTop__item}>My Acoount</p>
          </div>
          <div
            className={style.HeaderTop__homeItem}
            style={{ padding: "10px",
            border: "1px solid transparent",
            borderBottomColor: "grey" }}
          >
            <p className={style.HeaderTop__item}>CheckOut</p>
          </div>
          <div
            className={style.HeaderTop__homeItem}
            style={{ padding: "10px" }}
          >
            <p className={style.HeaderTop__item}>Sign Out</p>
          </div>
          
        </div>
      </li>

      <li className={style.HeaderTop__item} style={{ color: "#fff" }}>
        usd <IoIosArrowDown style={{ fontSize: "14px" }} />
        <div className={style.HeaderTop__homeDrop}>
          <div
            className={style.HeaderTop__homeItem}
            style={{
              padding: "10px",
              border: "1px solid transparent",
              borderBottomColor: "grey",
            }}
          >
            <p className={style.HeaderTop__item}>usd</p>
          </div>  
          <div
            className={style.HeaderTop__homeItem}
            style={{ padding: "10px" ,}}
          >
            <p className={style.HeaderTop__item}>Euro</p>
          </div>
        </div>
      </li>

      <li className={style.HeaderTop__item} style={{ color: "#fff" }}>
        English <IoIosArrowDown style={{ fontSize: "14px" }} />
        <div className={style.HeaderTop__homeDrop}>
          <div
            className={style.HeaderTop__homeItem}
            style={{
              padding: "10px",
              border: "1px solid transparent",
              borderBottomColor: "grey",
            }}
          >
            <p className={style.HeaderTop__item}>English</p>
          </div>  
          <div
            className={style.HeaderTop__homeItem}
            style={{ padding: "10px", }}
          >
            <p className={style.HeaderTop__item}>Fransuz</p>
          </div>
        </div>
      </li>
    </ul>
  );
}
