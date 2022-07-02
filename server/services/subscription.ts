import { prismaClient } from '../../utils/prismaClient'; // db client
import { NativeTransferPayload, TimeInterval } from '../../utils/types';

export class SubscriptionService {
  private startRecurringPayments() {}

  // Create subscription
  createSubscription = async (
    transferParameters: NativeTransferPayload,
    interval: TimeInterval
  ) => {
    // create subscription based the interval
    switch (interval) {
      default:
        break;
    }

    // const sub = await prismaClient.subscriptions.create({
    //   data: {},
    // });

    // Subscription in database
  };

  subscribeToPlan = async (planId: string, interval?: number) => {
    // you get the plan
    // subscribe to id
  };

  getSubscriptionStatus = async (subId: string) => {};

  cancelSubscription = async (subId: string) => {};
}

const subscriptionService = new SubscriptionService();
