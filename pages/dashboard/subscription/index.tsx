import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import SubscriptionModal from '../../../components/Modals/subscription';
import CreateSubscription from '../../../components/DashboardCard/CreateSubscription';
import { subscriptions } from '../../../utils/data';
import SubscriptionCard from '../../../components/card/SubscriptionCard';
import Button from '../../../components/Button';
import AddIcon from '../../../components/Icons/AddIcon';
// import EmptyState from '../../../components/EmptyState/EmptyState';

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
        <div className='text-white my-5 flex flex-col md:flex-row w-full justify-between items-center'>
          <h2 className='font-bold text-xl md:text-3xl mb-2'>
            My Subscriptions
          </h2>
          <div className='flex items-center space-x-2 md:space-x-4'>
            <Button
              icon={AddIcon}
              text='Create Custom'
              variant='secondary'
              onClick={() => setShow(true)}
            />
            <Button
              icon={AddIcon}
              text='Add Subscription'
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
        <div className='grid sm:grid-col-3 md:grid-cols-3 xl:grid-cols-4 gap-x-4 text-sm'>
          {subscriptions.map(({ id, img, name, num }) => (
            <SubscriptionCard key={id} image={img} name={name} num={num} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Subscription;
