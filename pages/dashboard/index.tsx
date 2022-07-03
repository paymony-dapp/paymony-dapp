import React, { useEffect } from 'react';
import Card from '../../components/dashboard/Card';
import Table from '../../components/dashboard/Table';
import Layout from '../../components/Layout';
import { trpcClient } from '../../utils/trpcClient';

const Dashboard = () => {
  const { data } = trpcClient.useQuery(['health-check']);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  const Squircle = '/squircle.png';
  const wallet = true;

  return (
    <Layout>
      <h1 className='text-zinc-100 text-xl font-bold mb-6'>Dashboard</h1>
      <section className='grid sm:grid-col-2 md:grid-cols-4 lg:grid-col-4 gap-x-4'>
        <Card title='Active Subscriptions' price='20' />
        <Card title='Canceled Subscriptions' price='03' />
        <Card title='Active Subscriptions' price='20' />
        <Card
          title='Wallet Balance'
          price='1200$'
          squircle={Squircle}
          wallet={wallet}
        />
      </section>
      <section className='my-6'>
        <Table />
      </section>
    </Layout>
  );
};

export default Dashboard;
