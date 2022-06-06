import Head from "next/head";
import React, { FC } from "react";
import Sidebar from "./Sidebar";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Paymony Dashboard</title>
      </Head>
      <main className='w-full flex h-screen overflow-x-hidden overflow-y-auto bg-gray-900'>
        <Sidebar />
        <div className='flex-1'>{children}</div>
      </main>
    </>
  );
};

export default Layout;
