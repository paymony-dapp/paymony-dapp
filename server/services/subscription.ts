import { prismaClient } from '../../utils/prismaClient'; // db client
import {
  NativeTransferPayload,
  PlanInterval,
  OakChains,
} from '../../utils/types';
import { CreateSubscriptionType } from '../schemas/subscriptionSchema';
import { RecurringPaymentTask } from '../tasks/recurringPaymentTask';
import { Scheduler, Constants } from 'oak-js-library';
import { Signer } from '@polkadot/api/types';

export class SubscriptionService {
  private startRecurringPayments() {}
  private recurrer = new RecurringPaymentTask();

  // Create subscription

  createSubscription = async (
    transferParameters: CreateSubscriptionType,
    interval: PlanInterval
  ) => {
    const {
      amount,
      category,
      signingAddress,
      receivingAddress,
      subscriberAddress,
      title,
      hex,
      imageUrl,
    } = transferParameters;

    //const customErrorHandler = (result) => {...} @Todo
    const backendScheduler = new Scheduler(Constants.OakChains.NEU);
    const txHash = await backendScheduler.sendExtrinsic(hex);

    const sub = await prismaClient.subscriptions.create({
      data: {
        amount,
        billingCycle: interval,
        category,
        signingAddress,
        subscriberAddress,
        recievingAddress: receivingAddress,
        title,
        txHash,
        imageUrl,
        startDate: new Date(),
        active: true,
      },
    });
  };

  //getSubscription
  async getSubcription(subId: string) {
    return await prismaClient.subscriptions.findFirstOrThrow({
      where: {
        id: subId,
      },
    });
  }

  //Create Subcription status
  async getSubscriptionStatus(subId: string): Promise<boolean> {
    const subcription = await prismaClient.subscriptions.findFirstOrThrow({
      where: {
        id: subId,
      },
    });
    return subcription.active;
  }

  async deleteSubscription(subId: string) {
    const subcription = await this.getSubcription(subId);

    if (subcription.active) {
      throw new Error('You must deactivate the error before deleting it');
    }

    await prismaClient.subscriptions.delete({
      where: {
        id: subId,
      },
    });
  }

  cancelSubscription = async (subId: string, signer: Signer) => {
    const subcription = await this.getSubcription(subId);
    const scheduler = new Scheduler(Constants.OakChains.NEU);
    const txHash = await scheduler.getTaskID(
      subcription.signingAddress,
      subcription?.txHash
    );

    // @Aliemeka//Please check this method that builds the cancel extrinsic, I am not sure of the parametrs it is expecting
    const hex = await scheduler.buildCancelTaskExtrinsic(
      subcription.signingAddress, //This has to be the wallet account used in creating the subcription, I am not sure if the signingAddress will do
      txHash, //this is correct
      signer //This is the current signer,
    );
    const cancelTxHash = await scheduler.sendExtrinsic(hex);

    await prismaClient.subscriptions.update({
      where: {
        id: subId,
      },
      data: {
        active: false,
        txHash: cancelTxHash,
      },
    });
  };
}

export const subscriptionService = new SubscriptionService();
