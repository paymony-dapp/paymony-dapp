import create from 'zustand';

interface WalletModalState {
  toggled: boolean;
  walletAddress: string;
  toggleModal: (toggleState: boolean) => void;
  connectWallet: VoidFunction;
}

const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length: number) {
  let result = ' ';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export const useWalletModal = create<WalletModalState>((set) => ({
  toggled: false,
  walletAddress: '',
  toggleModal: (toggleState) => set(() => ({ toggled: toggleState })),
  connectWallet: () =>
    set(() => ({ toggled: false, walletAddress: generateString(30) })),
}));
