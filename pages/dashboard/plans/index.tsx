import React from 'react';
import Button from '../../../components/Button';
import PlanCard from '../../../components/card/PlanCard';
import SubscriptionCard from '../../../components/card/SubscriptionCard';
import AddIcon from '../../../components/Icons/AddIcon';
import Layout from '../../../components/Layout';
import { subscriptions } from '../../../utils/data';

const Plans = () => {
  return (
    <Layout>
      <section className=''>
        <div className='w-full flex cursor-pointer'>
          <h4 className='text-white mr-5 border border-b-blue-500 pb-3 border-t-0  border-l-0 border-r-0'>
            Active
          </h4>
          <h4 className='text-gray-500'>Inactive</h4>
        </div>
        <div className='text-white my-5 flex w-full justify-between items-center'>
          <h2 className='font-bold text-xl md:text-3xl mb-2'>Plan</h2>
          <div className='flex items-center space-x-2 md:space-x-4'>
            <Button icon={AddIcon} text='Create Plan' />
          </div>
        </div>
        <div className='grid sm:grid-col-3 md:grid-cols-3 lg:grid-col-5 gap-x-4 text-sm'>
          {subscriptions.map(({ id, img, name, num }) => (
            <PlanCard key={id} image={img} name={name} num={num} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Plans;
