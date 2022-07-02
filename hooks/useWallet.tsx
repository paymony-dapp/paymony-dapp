import { getWallets, Wallet } from '@talisman-connect/wallets';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useWalletStore } from '../store/walletStore';
import { trpcApiClient } from '../utils/trpcClient';

const useWallet = ({
  show,
  toggle,
}: {
  show: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}) => {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const [showLink, setShowLink] = useState<boolean>();
  const [installLink, setInstallLink] = useState<string>('');

  const connectWallet = useWalletStore((state) => state.connectWallet);

  // Checks if wallet is registered
  const doesUserExist = async (address: string) => {
    try {
      const user = await trpcApiClient.query('users.find', address);
      return !!user;
    } catch (error) {
      console.log(error);
    }
  };

  const registerUser = async (address: string) => {
    try {
      const user = await trpcApiClient.mutation('users.add', { address });
      return user;
    } catch (error) {
      console.log(error);
    }
  };

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
        await wallet.subscribeAccounts(async (accounts) => {
          if (accounts) {
            const walletAddress = accounts[0].address;
            if (!(await doesUserExist(walletAddress))) {
              await registerUser(walletAddress);
            }
            connectWallet(walletAddress, wallet);
          }
        });
        toggle(false);
      } catch (e) {
        console.log('error');
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
  return {
    wallets,
    handleConnectWallet,
    showLink,
    installLink,
  };
};

export default useWallet;
