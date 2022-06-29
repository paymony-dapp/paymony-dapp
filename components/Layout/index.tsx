import Head from 'next/head';
import React, { FC, useEffect } from 'react';
import { useWalletModal } from '../../store/walletModalStore';
import ConnectWallet from '../EmptyState/ConnectWallet';
import WalletModal from '../Modals/WalletModal';
import Header from './Header';
import MobileNav from './MobileNav';
import Sidebar from './Sidebar';

const Layout: FC = ({ children }) => {
  const showWalletModal = useWalletModal((state) => state.toggled);
  const setToggleModal = useWalletModal((state) => state.toggleModal);

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
          <main className='max-w-screen-xl mx-auto px-8 min-h-screen relative'>
            <WalletModal
              show={showWalletModal}
              toggle={() => setToggleModal(false)}
            />
            <ConnectWallet />
            {/* {children} */}
          </main>
        </div>
      </main>
    </>
  );
};

export default Layout;
