import {IMenuLink} from "@/layout/header/menu/menuItem/menu-item.interface";
import React, {FC} from 'react';
import Link from "next/link";
import styles from 'app/components/layout/header/menu/menuItem/style.module.css'
 interface IMenuItem  {
    item:IMenuLink
}
const MenuItem:FC<IMenuItem> = ({item}) => {
    return (
      <li >

        <Link href={item.link}  >{item.name}</Link>
      </li>
    );
};

export default MenuItem;