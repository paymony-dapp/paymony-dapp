import React, { FC } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../Layout/Header';
import WalletModal from '../Modals/WalletModal';
import { useWalletModal } from '../../store/walletModalStore';
import { useWalletStore } from '../../store/walletStore';
import useSubscribe from '../../hooks/useSubscribe';
import { PlanInterval } from '../../utils/types';

interface PlanDetialsCardProps {
  name: string;
  amount: number;
  billingCycle: PlanInterval;
  category: string;
  description: string;
  active: boolean;
  address: string;
}

const PlanDetialsCard: FC<PlanDetialsCardProps> = ({
  name,
  amount,
  billingCycle,
  address,
  category,
  description,
  active,
}) => {
  const showWalletModal = useWalletModal((state) => state.toggled);
  const connected = useWalletStore((state) => state.connected);
  const setToggleModal = useWalletModal((state) => state.toggleModal);

  const { handleSubscribe } = useSubscribe();

  const handlePay = async () => {
    if (!connected) {
      setToggleModal(true);
    } else {
      await handleSubscribe(amount, billingCycle, 2, address, name, category);
    }
  };

  return (
    <>
      <Head>
        <title>Subscribe to {name} with Paymony</title>
      </Head>
      <div className='fixed top-0 inset-x-0'>
        <WalletModal
          show={showWalletModal}
          toggle={() => setToggleModal(false)}
        />
        {connected && <Header hide />}
      </div>
      <section className='h-screen w-screen flex flex-col  pt-20 md:pt-24 lg:pt-32 items-center space-y-4'>
        <div className='w-11/12 max-w-[668px] p-8 md:p-16 bg rounded-3xl'>
          <p className='text-sm text-zinc-200 text-right float-right'>
            {category} <span className='w-3 h-3 bg-green-500 rounded-full' />
          </p>
          <Image
            src='/acon.png'
            alt={name + 'logo'}
            height={136}
            width={136}
            objectFit='contain'
          />
          <article className='space-y-4 mb-12'>
            <h1 className='text-lg sm:text-xl md:text-2xl font-medium text-zinc-200'>
              {name}
            </h1>
            <p className='text-zinc-400 md:w-3/5 mb-6'>{description}</p>
            <p className='text-zinc-100'>
              Amount: {amount} STUR / {billingCycle}
            </p>
          </article>

          <div className='relative mb-8'>
            <label
              className='block text-sm font-medium text-zinc-200'
              htmlFor='recurrences'
            >
              {' '}
              How many times will you want to pay?{' '}
            </label>

            <select
              className='w-full p-3 mt-1 text-sm border-2 border-gray-500 rounded bg-gray-600'
              id='recurrences'
              defaultValue={1}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
          <button
            onClick={handlePay}
            className='appearance-none bg-blue-600 text-white text-center font-semibold w-full rounded-md py-4'
          >
            {!connected ? 'Connect your wallet to pay' : 'Subscribe'}
          </button>
        </div>
        <Link href='/'>
          <a>
            <h1 className='block text-transparent text-xl md:text-2xl bg-clip-text bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 font-semibold'>
              Paymony
            </h1>
          </a>
        </Link>
      </section>
    </>
  );
};

export default PlanDetialsCard;
