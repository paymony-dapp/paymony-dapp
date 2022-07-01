import { getWallets, Wallet } from '@talisman-connect/wallets';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useWalletStore } from '../store/walletStore';

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
          if (accounts) {
            connectWallet(accounts[0].address, wallet);
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
