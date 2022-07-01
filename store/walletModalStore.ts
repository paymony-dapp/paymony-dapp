import create from 'zustand';

interface WalletModalState {
  toggled: boolean;
  toggleModal: (toggleState: boolean) => void;
}

export const useWalletModal = create<WalletModalState>((set) => ({
  toggled: false,
  toggleModal: (toggleState) => set(() => ({ toggled: toggleState })),
}));
