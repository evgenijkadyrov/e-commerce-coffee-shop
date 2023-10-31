import {Layout} from "@/layout/Layout";
import React, {FC} from "react";
import Catalog from "@/ui/catalog/Catalog";

const Home: FC = () => {
    return (
        <Layout title={"Home"}>
            <div className='flex h-screen w-full items-center justify-center'>
               <Catalog/>
            </div>
        </Layout>
    );
};

export default Home;