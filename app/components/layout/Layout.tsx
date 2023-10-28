import {Header} from "@/layout/header/Header";
import styles from "app/components/layout/styles.module.scss";
import React from "react";

export const Layout = ({children}) => {
    return (
        <>
            <div className={styles.layout}>
                <main className={styles.menu}>
                    <Header/>
                    <section className={styles.content} >{children}</section>
                </main>
            </div>
        </>
    );
};

