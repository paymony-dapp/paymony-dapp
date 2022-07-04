import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Card from '../../../components/card/card';
import { subscriptions } from '../../../data';
import SubscriptionModal from '../../../components/Modals/subscription';
import CreateSubscription from '../../../components/DashboardCard/CreateSubscription';

const Subscription = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  return (
    <Layout>
      <SubscriptionModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <CreateSubscription show={show} setShow={setShow} />
      <section className=''>
        <div className='w-full flex cursor-pointer'>
          <h4 className='text-white mr-5 border border-b-blue-500 pb-3 border-t-0  border-l-0 border-r-0'>
            Active
          </h4>
          <h4 className='text-gray-500'>Inactive</h4>
        </div>
        <div className='text-white my-5 flex w-full justify-between items-center'>
          <h2 className='font-bold text-3xl'>My Subscriptions</h2>
          <div className=''>
            <button
              className='border border-gray-100 py-3 px-5 rounded-lg mr-4 cursor-pointer'
              onClick={() => setShow(!show)}
            >
              + Create Custom
            </button>
            <button
              className='bg-blue-500 text-white hover:bg-700 py-3 px-5 rounded-lg mr-4 cursor-pointer'
              onClick={() => setIsOpen(true)}
            >
              + Add Subscription
            </button>
          </div>
        </div>
        <div className='grid sm:grid-col-2 md:grid-cols-5 lg:grid-col-5 gap-x-4 text-sm'>
          {subscriptions.map((subscription) => (
            <Card>
              <img src={subscription.img} alt='' />
              <h4 className='text-gray-200 py-3 text-lg font-semibold'>
                {subscription.name}
              </h4>
              <div className='flex justify-between items-center'>
                <div className='flex text-gray-400'>
                  <div className=' border-green-500 text-white h-6 w-6 rounded-full flex justify-center items-center border-2 mr-3'>
                    {subscription.num}
                  </div>
                  <span>days left</span>
                </div>
                <span className='text-gray-400 font-medium text-sm'>
                  8$/monthly
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Subscription;
