import React from 'react';
import ConnectWalletSVG from '../Illustrations/ConnectWalletSVG';

const ConnectWallet = () => {
  return (
    <div className='w-full h-full grid place-items-center py-12 md:py-32 lg:py-40 text-center'>
      <ConnectWalletSVG />
      <h1 className='text-zinc-50 text-2xl  md:text-4xl font-semibold my-2'>
        Connect Wallet
      </h1>
      <p className='text-zinc-300 sm:w-1/2 md:w-3/5 lg:w-1/3'>
        Please connect your wallet to manage your subscriptions
      </p>
    </div>
  );
};

export default ConnectWallet;
