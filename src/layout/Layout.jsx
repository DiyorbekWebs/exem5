import React from "react";
import Header from "../components/header/Header";
import HeaderS from '../components/header/header.module.scss';
export default function Layout() {
  return (
    <>
      <header className={HeaderS.header}>
        <Header />
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
