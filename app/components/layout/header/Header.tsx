import styles from "app/components/layout/header/styles.module.scss";
import Search from "@/layout/header/search/Search";
import Menu from "@/layout/header/menu/Menu";
import Cart from "@/layout/header/cart/Cart";
import React from "react";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Menu />
      <Search />
      <Cart />
    </header>
  );
};
