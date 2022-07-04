import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import Modal from '.';
import { subscriptions } from '../../data';
import Card from '../card/card';
import Subscribe from '../subscribe/Subscribe';

interface SubscriptionProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Subscription: FC<SubscriptionProps> = (props) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <Modal title='Select Service' {...props}>
      <div className='mx-auto w-4/5'>
        <div className='w-full bg flex items-center py-3 px-3.5 rounded-md'>
          <img src='/Search.svg' alt='' />
          <input
            type='text'
            className='w-full ml-1 text-["#B0B0B0"] py-2 px-3 bg text-white outline-0 border-0'
            placeholder='Search Listed Services'
          />
        </div>
      </div>

      <div className='grid sm:grid-col-2 md:grid-cols-4 lg:grid-col-4 gap-x-4 text-sm'>
        {subscriptions.slice(0, 8).map((subscription) => (
          <Card onClick={() => setShow(!show)}>
            <img src={subscription.img} alt='' />
            <h4 className='text-gray-200 py-3 text-lg font-semibold'>
              {subscription.name}
            </h4>
          </Card>
        ))}
      </div>
      <Subscribe show={show} setShow={setShow} />
    </Modal>
  );
};

export default Subscription;
