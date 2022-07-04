import React, { Dispatch, FC, SetStateAction } from 'react';
import Modal from '../Modals/index';
import { subscriptions } from '../../data';
import Card from '../card';
import CalendarIcon from '../Icons/CalendarIcon';
import DollarIcon from '../Icons/DollarIcon';

interface SubscribeProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const Subscribe: FC<SubscribeProps> = (props) => {
  return (
    <Modal
      title='Recurrent Payments'
      isOpen={props.show}
      setIsOpen={props.setShow}
    >
      <div className='my-5'>
        <img src='/acon.png' alt='acon' />
        <h3 className='text-white font-medium'>Audius</h3>
      </div>
      <form action='' className=''>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mr-3 w-full'>
            <label htmlFor='Title' className=' text-white'>
              Title
            </label>
            <div className='w-full'>
              <select
                className='w-full my-2 p-4  text-sm border-gray-200 rounded-lg shadow-sm bg text-white outline-none border-0 mr-6'
                disabled
              >
                <option value=''>1</option>
                <option value=''>1</option>
                <option value=''>1</option>
              </select>
            </div>
          </div>
          <div className='flex w-full items-center'>
            <select
              className='w-full my-2 p-4  text-sm border-gray-200 rounded-lg shadow-sm bg text-white outline-none border-0 mr-6'
              disabled
            >
              <option value=''>1</option>
              <option value=''>1</option>
              <option value=''>1</option>
            </select>
            <select
              className='w-full my-2 p-4 text-sm border-gray-200 rounded-lg shadow-sm bg text-white outline-none border-0'
              disabled
            >
              <option value=''>1</option>
              <option value=''>1</option>
              <option value=''>1</option>
              <option value=''>1</option>
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
                type='text'
                className='w-full my-2 p-4 pl-12 text-sm border-gray-200 rounded-lg shadow-sm bg  border-0 outline-none text-white'
                placeholder='e.g $100'
                disabled
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
          <div className='mr-6 my-4 w-full'>
            <label htmlFor='Title' className='text-white py-6 my-6'>
              Wallet Address
            </label>
            <div className='relative'>
              <input
                type='text'
                className='w-full my-2 p-4 pl-12 text-sm border-gray-200 rounded-lg shadow-sm bg  border-0 outline-none text-white'
                placeholder='Enter wallet address (Oak network)'
                disabled
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
                disabled
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
              className='w-full p-4 my-2  text-sm border-gray-200 rounded-lg shadow-sm bg text-white outline-none border-0'
              disabled
            >
              <option defaultChecked>e.g Miscellenous</option>
              <option value=''>1</option>
              <option value=''>1</option>
            </select>
          </div>
          <div className='w-full'>
            <label htmlFor='Title' className='text-white py-6 my-6'>
              Remind
            </label>
            <select className='w-full p-4 my-2 text-sm border-gray-200 rounded-lg shadow-sm bg text-white outline-none border-0'>
              <option defaultChecked>Remind me</option>
              <option value=''>1</option>
              <option value=''>1</option>
              <option value=''>1</option>
            </select>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='my-6 w-full'>
            <label htmlFor='Title' className=' text-white py-8'>
              Descriptiion
            </label>
            <div className='relative'>
              <textarea
                rows={3}
                className='w-full p-4 my-2  text-sm border-gray-200 rounded-lg shadow-sm bg border-0 outline-none text-white resize-none'
                placeholder='Enter description'
              ></textarea>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-end items-center'>
          <button className='inline-flex items-center px-8 py-3 text-white bg-blue-600 border border-blue-600 rounded hover:bg-transparent hover:text-blue-600 active:text-blue-500 focus:outline-none focus:ring text-sm font-medium'>
            Subscribe
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Subscribe;
