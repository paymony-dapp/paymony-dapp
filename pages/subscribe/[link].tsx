import { TRPCClientError } from '@trpc/client';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ErrorState from '../../components/EmptyState/ErrorState';
import PlanDetialsCard from '../../components/PlanDetailsCard';
import Skeleton from '../../components/Skeleton';
import { trpcApiClient } from '../../utils/trpcClient';

type PlanInterval = 'HOURLY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';

type Plan = {
  id: string;
  name: string | null;
  amount: number;
  billingCycle: PlanInterval;
  category: string;
  description: string;
  isPublic: boolean;
  accessUrl: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  userWallet: string;
};

const PlanPage: NextPage = () => {
  const { asPath } = useRouter();

  const pathArray = asPath.split('/');
  const link = pathArray[pathArray.length - 1];

  const [plan, setPlan] = useState<Plan>();
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getPlan = async () => {
      setError(false);
      try {
        setLoading(true);
        console.log(link);
        const plan = await trpcApiClient.query('plans.findByLink', {
          accessUrl: link,
        });
        setPlan(plan);
      } catch (error) {
        setError(true);
        if (error instanceof TRPCClientError) {
          if (error.data.code === 'NOT_FOUND') {
            setErrorMessage('Sorry, this plan cannot be found');
          }
        } else {
          setErrorMessage('Error occured fetching plan');
        }
      } finally {
        setLoading(false);
      }
    };

    getPlan();
  }, [link]);

  return (
    <main className='h-screen w-screen bg-slate-900 text-zinc-100'>
      {loading ? (
        <div className='justify-center bg-slate-900 h-screen w-screen grid place-items-center '>
          <Skeleton />
        </div>
      ) : plan ? (
        <PlanDetialsCard
          active={plan.active}
          billingCycle={plan.billingCycle.toString().toLowerCase()}
          amount={plan.amount}
          category={plan.category}
          description={plan.description}
          name={plan.name!}
        />
      ) : error ? (
        <ErrorState errorMessage={errorMessage} />
      ) : null}
    </main>
  );
};

export default PlanPage;
