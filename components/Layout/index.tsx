import Head from 'next/head';
import React, { FC } from 'react';
import Header from './Header';
import MobileNav from './MobileNav';
import Sidebar from './Sidebar';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Paymoni Dashboard</title>
      </Head>
      <main className='w-full flex h-screen overflow-x-hidden overflow-y-auto bg-gray-900'>
        <MobileNav />
        <Sidebar />
        <div className='flex-1'>
          <Header />
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
