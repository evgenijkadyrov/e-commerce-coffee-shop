import Catalog from "@/ui/catalog/Catalog";
import Heading from "@/ui/heading/Heading";
import { Layout } from "@/layout/Layout";
import React, { FC } from "react";

const Home: FC = () => {
  return (
    <Layout title={"Home"}>
      <div className="flex-col h-screen w-full items-center justify-center ">
        <Heading>Your best hours with cup of coffee.</Heading>
        <Catalog />
      </div>
    </Layout>
  );
};

export default Home;