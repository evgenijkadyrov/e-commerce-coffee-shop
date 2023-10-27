import {Header} from "@/layout/header/Header";
import styles from "./styles.module.css";
import React from "react";

export const Layout = ({children}) => {
    return (
        <>
            <div className={styles.layout}>
                <main>
                    <Header/>
                    <section className={styles.section}>{children}</section>
                </main>
            </div>
        </>
    );
};

