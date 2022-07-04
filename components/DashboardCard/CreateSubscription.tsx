import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import Modal from '../Modals/index';
import CalendarIcon from '../Icons/CalendarIcon';
import DollarIcon from '../Icons/DollarIcon';
import { useFormik } from 'formik';
import { useWalletStore } from '../../store/walletStore';
import { z } from 'zod';
import { PlanInterval } from '@prisma/client';
import useSubscribe from '../../hooks/useSubscribe';

interface CreateSubscriptionProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const CreateSubscription: FC<CreateSubscriptionProps> = (props) => {
  const walletAddress = useWalletStore((state) => state.walletAddress);
  const { handleSubscribe } = useSubscribe();

  const formik = useFormik({
    initialValues: {
      title: '',
      amount: '',
      billingInterval: '',
      receivingAddress: '',
      recurrence: '',
      startDate: '',
      category: '',
      description: '',
    },
    onSubmit: ({
      title,
      amount,
      billingInterval,
      recurrence,
      category,
      startDate,
      description,
      receivingAddress,
    }) => {
      handleSubscribe(
        +amount,
        billingInterval as any,
        +recurrence,
        receivingAddress,
        title,
        category,
        +startDate
      );
    },
  });

  return (
    <Modal
      title='Recurrent Payments'
      isOpen={props.show}
      setIsOpen={props.setShow}
    >
      <form onSubmit={formik.handleSubmit} className=''>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mr-3 w-full'>
            <label htmlFor='title' className=' text-white'>
              Title
            </label>
            <div className='relative'>
              <input
                type='text'
                name='title'
                onChange={formik.handleChange}
                value={formik.values.title}
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
            <label htmlFor='Title' className='text-white py-6 my-6'>
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
          <div className='w-full'>
            <label htmlFor='Title' className='text-white py-6 my-6'>
              Start Bill Date
            </label>
            <div className='relative'>
              <input
                type='number'
                name='startDate'
                onChange={formik.handleChange}
                className='w-full my-2 p-4 pl-12 text-sm border-gray-200 rounded-lg shadow-sm bg  border-0 outline-none text-white'
                placeholder='Select Date'
              />
              <span className='absolute inset-y-0 inline-flex items-center left-3'>
                <CalendarIcon />
              </span>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mr-6 my-4 w-full'>
            <label htmlFor='Title' className='text-white py-6 my-6'>
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
          <div className='w-full'>
            <label htmlFor='Title' className='text-white py-6 my-6'>
              Next Bill Date
            </label>
            <div className='relative'>
              <input
                type='text'
                className='w-full my-2 p-4 pl-12 text-sm border-gray-200 rounded-lg shadow-sm bg  border-0 outline-none text-white'
                placeholder='Select Date'
              />
              <span className='absolute inset-y-0 inline-flex items-center left-3'>
                <CalendarIcon />
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
            <label htmlFor='Title' className='text-white py-6 my-6'>
              Remind
            </label>
            <select className='w-full p-4 my-2 text-sm border-gray-200 rounded-lg shadow-sm bg text-white outline-none border-0'>
              <option value='Yes' defaultChecked>
                Remind me
              </option>
              <option value='No'>No Reminders</option>
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
            Create
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateSubscription;
