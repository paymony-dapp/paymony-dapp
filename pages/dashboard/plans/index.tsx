import { Plan } from '@prisma/client';
import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import PlanCard from '../../../components/card/PlanCard';
import CreatePlan from '../../../components/DashboardCard/CreatePlan';
import EmptyState from '../../../components/EmptyState/EmptyState';
import ErrorState from '../../../components/EmptyState/ErrorState';
import AddIcon from '../../../components/Icons/AddIcon';
import Layout from '../../../components/Layout';
import Skeleton from '../../../components/Skeleton';
import { useWalletStore } from '../../../store/walletStore';
import { generateAvatar } from '../../../utils/generateAvatar';
import { trpcApiClient } from '../../../utils/trpcClient';

const Plans = () => {
  const [show, setShow] = useState<boolean>(false);
  const [plans, setPlans] = useState<Plan[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const walletAddress = useWalletStore((state) => state.walletAddress);

  useEffect(() => {
    const getPlans = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const plans = await trpcApiClient.query('plans.plans', walletAddress);
        if (plans) {
          setPlans(plans);
        }
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPlans();
  }, [walletAddress]);

  return (
    <Layout>
      <CreatePlan setShow={setShow} show={show} relaod={() => {}} />
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
            <Button
              icon={AddIcon}
              text='Create Plan'
              onClick={() => setShow(true)}
            />
          </div>
        </div>
        {isLoading ? (
          <Skeleton />
        ) : isError ? (
          <ErrorState errorMessage='Error fetching plans' />
        ) : plans && plans.length ? (
          <div className='grid sm:grid-col-3 md:grid-cols-3 lg:grid-col-5 gap-x-4 text-sm'>
            {plans.map(({ name, logoUrl, amount, id }) => (
              <PlanCard
                key={id}
                image={logoUrl || generateAvatar()}
                name={name || 'Planx'}
                num={amount}
                amount={amount}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            message='You can create plans and have people subscribe to you'
            title='No Plans'
            actionText='Create Plan'
            onAction={() => setShow(true)}
          />
        )}
      </section>
    </Layout>
  );
};

export default Plans;
