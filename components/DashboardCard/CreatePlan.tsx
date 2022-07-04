import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import Modal from '../Modals/index';
import CalendarIcon from '../Icons/CalendarIcon';
import DollarIcon from '../Icons/DollarIcon';
import { useFormik } from 'formik';
import useSubscribe from '../../hooks/useSubscribe';
import { useWalletStore } from '../../store/walletStore';
import usePlan from '../../hooks/usePlan';
import { PlanInterval } from '../../utils/types';

interface CreatePlanProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  relaod: VoidFunction;
}

const CreatePlan: FC<CreatePlanProps> = (props) => {
  //   const { handleSubscribe } = useSubscribe();
  const walletAddress = useWalletStore((state) => state.walletAddress);
  const { isSubmitting, error, planLink, savePlan } = usePlan();
  const [showPl, toggle] = useState(true);

  const formik = useFormik({
    initialValues: {
      name: '',
      amount: '',
      billingCycle: '',
      receivingAddress: walletAddress,
      recurrence: '',
      isPublic: '',
      startDate: '',
      category: '',
      description: '',
    },
    onSubmit: async ({
      name,
      amount,
      billingCycle,
      category,
      isPublic,
      description,
      receivingAddress,
    }) => {
      await savePlan({
        amount: +amount,
        billingCycle: billingCycle as PlanInterval,
        category,
        description,
        isPublic: isPublic === 'Yes',
        name,
        userWallet: receivingAddress,
      });
    },
  });

  const onClose = () => {
    props.setShow(false);
    props.relaod();
  };

  return (
    <>
      {planLink ? (
        <Modal
          title='Your wallet'
          isOpen={showPl}
          setIsOpen={toggle}
          size='small'
        >
          <div className='bg-gray-700/40 text-zinc-50 font-semibold tracking-tighter py-3 text-center rounded-md text-lg mt-6'>
            <p>
              <span>{planLink}</span>
            </p>
          </div>
          <div className='text-center flex w-full justify-center mt-3'>
            <a
              href={planLink}
              target='_blank'
              className='text-zinc-200 text-center text-sm flex space-x-1 mx-auto items-center focus:text-blue-300 hover:text-blue-400'
              rel='noreferrer'
            >
              Go to link
            </a>
          </div>
        </Modal>
      ) : null}
      <Modal title='Recurrent Payments' isOpen={props.show} setIsOpen={onClose}>
        {error ? (
          <p className='text-center mb-2 text-rose-500'>{error}</p>
        ) : null}
        <form onSubmit={formik.handleSubmit} className=''>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='mr-3 w-full'>
              <label htmlFor='title' className=' text-white'>
                Name
              </label>
              <div className='relative'>
                <input
                  type='text'
                  name='name'
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                  className='w-full my-2 p-4  text-sm border-gray-200 rounded-lg shadow-sm bg border-0 outline-none text-white'
                  placeholder='David’s Stipend'
                />
              </div>
            </div>
            <div className='flex w-full items-center'>
              <select
                onChange={formik.handleChange}
                name='billingCycle'
                className='w-full my-2 p-4  text-sm border-gray-200 rounded-lg shadow-sm bg text-white outline-none border-0 mr-6 disabled'
              >
                <option value='HOURLY'>Hourly</option>
                <option value='DAILY'>Daily</option>
                <option value='WEEKLY'>Weekly</option>
                <option value='MONTHLY'>Monthly</option>
              </select>
              <select
                onChange={formik.handleChange}
                name='recurrence'
                className='w-full my-2 p-4 text-sm border-gray-200 rounded-lg shadow-sm bg text-white outline-none border-0'
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <option value={i}>{i}</option>
                ))}
              </select>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='mr-6 my-4 w-full'>
              <label htmlFor='amount' className='text-white py-6 my-6'>
                Amount
              </label>
              <div className='relative'>
                <input
                  type='number'
                  name='amount'
                  onChange={formik.handleChange}
                  className='w-full my-2 p-4 pl-12 text-sm border-gray-200 rounded-lg shadow-sm bg  border-0 outline-none text-white'
                  placeholder='e.g $100'
                />
                <span className='absolute inset-y-0 inline-flex items-center left-3'>
                  <DollarIcon />
                </span>
              </div>
            </div>
            <div className='mr-6 my-4 w-full'>
              <label
                htmlFor='receivingAddress'
                className='text-white py-6 my-6'
              >
                Wallet Address
              </label>
              <div className='relative'>
                <input
                  type='text'
                  name='receivingAddress'
                  className='w-full my-2 p-4 pl-12 text-sm border-gray-200 rounded-lg shadow-sm bg  border-0 outline-none text-white'
                  placeholder='Enter wallet address (Oak network)'
                />
                <span className='absolute inset-y-0 inline-flex items-center left-3'>
                  <DollarIcon />
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='w-full mr-6'>
              <label htmlFor='Title' className='text-white py-6 my-6'>
                Category
              </label>
              <select
                onChange={formik.handleChange}
                name='category'
                placeholder='eg. Miscellenous'
                className='w-full p-4 my-2  text-sm border-gray-200 rounded-lg shadow-sm bg text-white outline-none border-0'
              >
                <option value='Bills'>Bills</option>
                <option value='DAO membership'>DAO Membership</option>
                <option value='Donations'>Donations</option>
                <option value='Utility'>Utility</option>
                <option value='Payroll'>Payroll</option>
              </select>
            </div>
            <div className='w-full'>
              <label htmlFor='isPublic' className='text-white py-6 my-6'>
                List on Paymony
              </label>
              <select
                name='isPublic'
                onChange={formik.handleChange}
                className='w-full p-4 my-2 text-sm border-gray-200 rounded-lg shadow-sm bg text-white outline-none border-0'
              >
                <option value={'Yes'} defaultChecked>
                  Yes
                </option>
                <option value='No'>No</option>
              </select>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='my-6 w-full'>
              <label htmlFor='description' className=' text-white py-8'>
                Descriptiion
              </label>
              <div className='relative'>
                <textarea
                  name='description'
                  rows={3}
                  onChange={formik.handleChange}
                  className='w-full p-4 my-2  text-sm border-gray-200 rounded-lg shadow-sm bg border-0 outline-none text-white resize-none'
                  placeholder='David’s Stipend'
                ></textarea>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-end items-center'>
            <button className='inline-flex items-center px-8 py-3 text-white bg-blue-600 border border-blue-600 rounded hover:bg-transparent hover:text-blue-600 active:text-blue-500 focus:outline-none focus:ring text-sm font-medium'>
              {isSubmitting ? 'Creating Plan...' : 'Create Plan'}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default CreatePlan;
