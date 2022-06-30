import React, { Dispatch, FC, SetStateAction } from 'react';
import Modal from '.';

interface WalletModalProps {
  show: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}

const WalletModal: FC<WalletModalProps> = ({ show, toggle }) => {
  return (
    <Modal
      title='Connect a wallet to continue'
      isOpen={show}
      setIsOpen={toggle}
    >
      <div className='text-zinc-100'>Wallet</div>
    </Modal>
  );
};

export default WalletModal;
