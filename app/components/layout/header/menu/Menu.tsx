import MenuItem from "@/layout/header/menu/menuItem/MenuItem";
import { menuDataItems } from "@/layout/header/menu/menu.data";
import styles from "@/layout/header/menu/menu.module.scss";
import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Menu: FC = () => {
  return (
    <div className={styles.menu}>
      <Link href={"/"}>
        <Image
          src={"/images/logo.webp"}
          alt={"logo"}
          width={150}
          height={150}
        />
      </Link>
      <nav>
        <ul>
          {menuDataItems.map((item) => (
            <MenuItem key={item.link} item={item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;