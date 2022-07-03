import React, { Dispatch, FC, SetStateAction } from 'react';
import Modal from '.';

interface SubscriptionProps {
  show: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}

const Subscription: FC<SubscriptionProps> = ({ show, toggle }) => {
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

export default Subscription;
