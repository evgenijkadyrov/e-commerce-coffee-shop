import styles from "app/components/layout/styles.module.scss";
import { Header } from "@/layout/header/Header";
import React, { FC } from "react";

export const Layout: FC = ({ children }) => {
  return (
    <>
      <div className={styles.layout}>
        <main className={styles.menu}>
          <Header />
          <section className={styles.content}>{children}</section>
        </main>
      </div>
    </>
  );
};

