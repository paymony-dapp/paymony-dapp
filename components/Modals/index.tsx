import React, { Dispatch, FC, Fragment, SetStateAction } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import CloseIcon from '../Icons/CloseIcon';

interface ModalProps {
  title: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({ isOpen, setIsOpen, title, children }) => {
  const handleClose = () => setIsOpen(false);
  return (
    <Dialog as='section' open={isOpen} onClose={handleClose}>
      <div className='fixed inset-0 grid place-items-center bg-slate-900/20 backdrop-blur-sm z-10'>
        <Dialog.Panel className='max-w-md w-11/12 bg-slate-900 p-8 rounded-2xl shadow-xl shadow-blue-900/40'>
          <header className='flex w-full justify-between items-center mb-4'>
            <Dialog.Title
              as='h3'
              className='text-zinc-100 font-semibold md:text-lg'
            >
              {title}
            </Dialog.Title>
            <button
              onClick={handleClose}
              className='w-9 h-9 grid place-items-center rounded-full bg-slate-800'
            >
              <CloseIcon />
            </button>
          </header>
          <main>{children}</main>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
