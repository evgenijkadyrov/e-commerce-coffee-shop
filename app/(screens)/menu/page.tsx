"use client";

import React, { FC } from "react";
import Image from "next/image";
import {Layout} from "@/layout/Layout";
import MenuPageItem from "@/app/(screens)/menu/MenuPageItem";

const MenuPage: FC = () => {
  return (
    <Layout>
     <MenuPageItem/>
    </Layout>
  );
};

export default MenuPage;