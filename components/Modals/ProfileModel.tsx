import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { SetState } from 'zustand';
import Modal from '.';
import { useWalletStore } from '../../store/walletStore';
import Button from '../Button';
import CopyIcon from '../Icons/CopyIcon';

interface ProfileModelProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ProfileModel: FC<ProfileModelProps> = (props) => {
  const walletAddress = useWalletStore((state) => state.walletAddress);
  const removeWallet = useWalletStore((state) => state.removeWallet);

  const [copied, setCopied] = useState(false);
  const handleClick = (e: any) => {
    e.preventDefault();
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 400);
  };

  const handleDisconnect = () => {
    removeWallet();
    props.setIsOpen(false);
  };

  return (
    <Modal title='Your wallet' {...props} size='small'>
      <div className='bg-gray-700/40 text-zinc-50 font-semibold tracking-tighter py-3 text-center rounded-md text-lg mt-6'>
        <p>
          <span>
            {walletAddress.substring(0, 6)}...{walletAddress.substring(30)}
          </span>
        </p>
      </div>
      <div className='text-center flex w-full justify-center mt-3'>
        <a
          href='#'
          onClick={handleClick}
          className='text-zinc-200 text-center text-sm flex space-x-1 mx-auto items-center focus:text-blue-300 hover:text-blue-400'
        >
          {!copied ? (
            <>
              <span>Copy address </span>{' '}
              <span className='scale-[.69]'>
                <CopyIcon />
              </span>
            </>
          ) : (
            <span>Copied!</span>
          )}
        </a>
      </div>
      <div className='flex w-full justify-center mt-5'>
        <button
          onClick={handleDisconnect}
          className='w-full px-12 py-3 text-sm font-medium text-white bg-transparent border border-zinc-100 rounded-lg sm:w-auto active:text-opacity-75 hover:border-red-500 hover:bg-transparent hover:text-red-500 focus:outline-none focus:ring'
        >
          Disconnect wallet
        </button>
      </div>
    </Modal>
  );
};

export default ProfileModel;
