import React from "react";
import Header from "../components/header/Header";
import HeaderS from '../components/header/header.module.scss';
import HeaderTop from "../components/header/headertop/headerTop";
export default function Layout() {
  return (
    <>
      <header className={HeaderS.header}>
        <HeaderTop/>
        <Header />
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
