import React, { useState } from 'react';
import { createPlanType } from '../server/schemas/planSchema';
import { trpcApiClient } from '../utils/trpcClient';

const usePlan = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [planLink, setPlanLink] = useState('');

  const savePlan = async (payload: createPlanType) => {
    try {
      setSubmitting(true);
      setError('');
      const planUrl = await trpcApiClient.mutation('plans.create', payload);
      setPlanLink(planUrl);
    } catch (error) {
      setError('Failed to create plan');
    } finally {
      setSubmitting(false);
    }
  };

  return {
    isSubmitting,
    savePlan,
    error,
    planLink,
  };
};

export default usePlan;
