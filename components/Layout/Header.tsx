import React, { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';
import WalletIcon from '../Icons/WalletIcon';
import { useWalletModal } from '../../store/walletModalStore';
import { useWalletStore } from '../../store/walletStore';
import ProfileModel from '../Modals/ProfileModel';

interface HeaderProps {
  hide?: boolean;
}

const Header: FC<HeaderProps> = ({ hide }) => {
  const connected = useWalletStore((state) => state.connected);
  const walletAddress = useWalletStore((state) => state.walletAddress);
  const toggleWalletModal = useWalletModal((state) => state.toggleModal);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className='bg-gray-900'>
      <ProfileModel isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8 flex justify-between items-center lg:block'>
        <div className='lg:hidden ml-2'>
          <Link href='/'>
            <a>
              {!hide && (
                <h1 className='block text-transparent text-xl md:text-2xl bg-clip-text bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 font-semibold'>
                  Paymony
                </h1>
              )}
            </a>
          </Link>
        </div>
        <div className='flex items-center justify-end gap-2 md:gap-4'>
          {connected ? (
            <>
              {!hide && (
                <>
                  <div className='flex items-center gap-4'>
                    <a
                      href=''
                      className='block p-2.5 text-gray-600 bg-white rounded-full hover:text-gray-700 shrink-0 shadow-sm'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-5 h-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                        />
                      </svg>
                    </a>
                  </div>

                  <span
                    aria-hidden='true'
                    className='block w-px h-6 bg-gray-400 rounded-full'
                  ></span>
                </>
              )}

              <div
                onClick={() => setIsOpen(true)}
                className='flex items-center shrink-0 appearance-none px-3 py-3 md:px-6 space-x-2 bg-gray-800/40 rounded-lg cursor-pointer'
              >
                <Image
                  width={40}
                  height={40}
                  className='object-cover bg-zinc-100 rounded-full'
                  src={`https://avatars.dicebear.com/api/identicon/${walletAddress}.svg`}
                  alt='Simon Lewis'
                />
                <p className='text-zinc-50 text-sm md:text-base font-semibold'>
                  {walletAddress.substring(0, 6)}...
                  {walletAddress.substring(40)}
                </p>
              </div>
            </>
          ) : (
            <Button
              onClick={() => toggleWalletModal(true)}
              icon={WalletIcon}
              text='Connect Wallet'
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
