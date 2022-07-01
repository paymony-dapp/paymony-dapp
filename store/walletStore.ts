import { Wallet } from '@talisman-connect/wallets';
import { createStore, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

interface WalletAddressStore {
  connected: boolean;
  walletAddress: string;
  wallet?: Wallet;
  connectWallet: (address: string, wallet: Wallet) => void;
  removeWallet: VoidFunction;
}

type MyPersist = (
  config: StateCreator<WalletAddressStore>,
  options: PersistOptions<WalletAddressStore>
) => StateCreator<WalletAddressStore>;

export const useWalletStore = createStore<WalletAddressStore>(
  (persist as unknown as MyPersist)(
    (set) => ({
      connected: false,
      walletAddress: '',
      connectWallet: (address, wallet) =>
        set({ walletAddress: address, wallet, connected: true }),
      removeWallet: () =>
        set({ wallet: undefined, walletAddress: '', connected: false }),
    }),
    {
      name: 'wallet-storage',
    }
  )
);
