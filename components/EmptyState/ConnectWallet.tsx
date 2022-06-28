import React from 'react';
import Image from 'next/image';

const ConnectWallet = () => {
  return (
    <div className='w-full h-full grid place-items-center'>
      <div className='space-y-4'>
        <Image
          src='/connect-wallet.png'
          height={272}
          width={272}
          objectFit='contain'
          alt=''
        />
      </div>
    </div>
  );
};

export default ConnectWallet;
