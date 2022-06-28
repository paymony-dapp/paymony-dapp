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
          <main className='max-w-screen-xl mx-auto px-8'>{children}</main>
        </div>
      </main>
    </>
  );
};

export default Layout;
