import { prismaClient } from '../../utils/prismaClient'; // db client
import { NativeTransferPayload, TimeInterval } from '../../utils/types';
import { RecurringPaymentTask } from '../tasks/recurringPaymentTask';

export class SubscriptionService {
  private startRecurringPayments() { }
  private recurrer = new RecurringPaymentTask();

  // Create subscription
  createSubscription = async (
    transferParameters: NativeTransferPayload,
    interval: TimeInterval
  ) => {
    let transactionHashAsHexString: string;

    // create subscription based the interval
    switch (interval) {
      case TimeInterval.DAILY:
        transactionHashAsHexString = await this.recurrer.scheduleDailyPayments(transferParameters);
        break;
      case TimeInterval.HOURLY:
        transactionHashAsHexString = await this.recurrer.scheduleHourlyPayments(transferParameters);
        break;
      case TimeInterval.WEEKLY:
        transactionHashAsHexString = await this.recurrer.scheduleWeeklyPayments(transferParameters);
        break;
      case TimeInterval.MONTHLY:
        transactionHashAsHexString = await this.recurrer.scheduleMonthlyPayments(transferParameters);
        break;
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

  getSubscriptionStatus = async (subId: string) => { };

  cancelSubscription = async (subId: string) => { };
}

const subscriptionService = new SubscriptionService();
