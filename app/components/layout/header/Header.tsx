import React from "react";
import styles from 'app/components/layout/header/styles.module.scss'
import Menu from "@/layout/header/menu/Menu";
import Search from "@/layout/header/search/Search";
import Cart from "@/layout/header/cart/Cart";
export const Header = () => {
    return <header className={styles.header}>
        <Menu/>
        <Search/>
        <Cart/>
    </header>;
};

