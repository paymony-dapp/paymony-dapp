import React, { Dispatch, FC, Fragment, SetStateAction } from 'react';
import { Dialog } from '@headlessui/react';
import CloseIcon from '../Icons/CloseIcon';

interface ModalProps {
  title: string;
  isOpen: boolean;
  size?: 'small' | 'large';
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  title,
  size = 'large',
  children,
}) => {
  const handleClose = () => setIsOpen(false);
  return isOpen ? (
    <Dialog static as='section' open={isOpen} onClose={handleClose}>
      <div className='fixed inset-0 grid place-items-center bg-slate-900/20 backdrop-blur-sm z-10'>
        <Dialog.Panel
          className={`${
            size === 'small' ? 'max-w-md' : 'max-w-4xl'
          } bg-slate-900 p-8 rounded-2xl w-11/12 shadow-xl shadow-blue-900/40`}
        >
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
  ) : null;
};

export default Modal;
