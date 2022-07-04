import { prismaClient } from '../../utils/prismaClient'; // db client
import { NativeTransferPayload, PlanInterval } from '../../utils/types';
import { CreateSubscriptionType } from '../schemas/subscriptionSchema';
import { RecurringPaymentTask } from '../tasks/recurringPaymentTask';

export class SubscriptionService {
  private startRecurringPayments() {}
  private recurrer = new RecurringPaymentTask();

  // Create subscription

  createSubscription = async (
    transferParameters: CreateSubscriptionType,
    interval: PlanInterval
  ) => {
    // const sub = await prismaClient.subscriptions.create({
    //   data:
    //   {
    //     amount: transferParameters.amount,
    //   },
    // });
    // Subscription in database
  };
  //getSubscription
  //Create p
  getSubscriptionStatus = async (subId: string) => {};

  //getSubcriptionTransactions(subId: string) //from txHash

  cancelSubscription = async (subId: string, hex: string) => {
    //will change a subcription from db
    // will change on block change
    //
  };

  //Delete Subcription
}

const subscriptionService = new SubscriptionService();

//A plan is if i want to be paid
//A subcription is if i want to pay
