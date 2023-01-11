import React from "react";
import Header from "../components/header/Header";
import HeaderS from "../components/header/header.module.scss";
import HeaderTop from "../components/header/headertop/headerTop";
import {Main} from ".././components/main/Main";
export default function Layout() {
  return (
    <>
      <header className={HeaderS.header}>
        <HeaderTop />
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer></footer>
    </>
  );
}
