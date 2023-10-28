import {Layout} from "@/layout/Layout";
import React, {FC} from "react";

const Home: FC = () => {
    return (
        <Layout title={"Home"}>
            <div className='flex h-screen w-full items-center justify-center'>
                <h1 className='text-center text-7xl font-bold text-red'>Project</h1>
            </div>
        </Layout>
    );
};

export default Home;