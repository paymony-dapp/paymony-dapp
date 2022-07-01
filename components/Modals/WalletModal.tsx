import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import Modal from '.';
import Image from 'next/image';

import {
  getWallets,
  Wallet,
  SetupNotDoneError,
} from '@talisman-connect/wallets';

interface WalletModalProps {
  show: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}

const WalletModal: FC<WalletModalProps> = ({ show, toggle }) => {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [showLink, setShowLink] = useState<boolean>();
  const [installLink, setInstallLink] = useState<string>('');

  useEffect(() => {
    const supportedWallets = getWallets();
    setWallets(supportedWallets);
  }, [show]);

  const handleConnectWallet = async (wallet: Wallet) => {
    setShowLink(false);
    setInstallLink('');
    if (wallet.installed) {
      try {
        await wallet.enable('paymony-dapp');
        await wallet.subscribeAccounts((accounts) => {
          console.log(accounts ? accounts[0] : 'No accounts');
        });
        toggle(false);
      } catch (e) {
        const error = e as any;
        if (error.instanceof(SetupNotDoneError)) {
          console.log('Set up not complete');
        }
      }
    } else {
      setShowLink(true);
      setInstallLink(wallet.installUrl);
    }
  };

  useEffect(() => {
    if (!show) {
      setInstallLink('');
      setShowLink(false);
    }
  }, [show]);

  return (
    <Modal
      title='Connect a wallet to continue'
      isOpen={show}
      setIsOpen={toggle}
    >
      {showLink ? (
        <p className='text-center text-xs text-zinc-300 mb-2 p-2 rounded-full'>
          Wallet not installed!{' '}
          <a
            href={installLink}
            className='text-blue-500 hover:text-blue-400'
            target='_blank'
            rel='noreferrer paymony-dapp'
          >
            Install wallet
          </a>
        </p>
      ) : null}
      <div className='space-y-4'>
        {wallets.length
          ? wallets.map((wallet, i) => (
              <button
                key={i}
                onClick={() => handleConnectWallet(wallet)}
                className='flex w-full items-center appearance-none hover:bg-slate-800/50 p-2 transition-colors duration-300 rounded-sm'
              >
                <Image
                  src={wallet.logo.src}
                  height={48}
                  width={48}
                  alt={wallet.logo.alt}
                  className='mr-4'
                />
                <p className='ml-4 text-lg text-zinc-100 font-bold'>
                  {wallet.title}
                </p>
                {wallet.installed ? (
                  <p className='ml-auto text-xs text-green-400 py-1 px-2 bg-green-100/10 rounded-full'>
                    detected
                  </p>
                ) : (
                  <p className='ml-auto text-xs text-rose-400 py-1 px-2 bg-rose-100/10 rounded-full'>
                    not installed
                  </p>
                )}
              </button>
            ))
          : null}
      </div>
    </Modal>
  );
};

export default WalletModal;
