import React, { useEffect } from 'react';
import Card from '../../components/DashboardCard/Card';
import Table from '../../components/DashboardCard/Table';
import Layout from '../../components/Layout';
import { trpcHookClient } from '../../utils/trpcClient';

const Dashboard = () => {
  const { data } = trpcHookClient.useQuery(['health-check']);

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
      <section className='grid grid-cols-2 md:grid-cols-4 lg:grid-col-4 gap-x-4'>
        <Card title='Active Subscriptions' price={20} />
        <Card title='Canceled Subscriptions' price={3} />
        <Card title='Active Subscriptions' price={20} />
        <Card
          title='Wallet Balance'
          price={3000}
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
