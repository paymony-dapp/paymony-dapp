import { prismaClient } from '../../utils/prismaClient'; // db client
import {
  NativeTransferPayload,
  PlanInterval,
  OakChains,
} from '../../utils/types';
import { CreateSubscriptionType } from '../schemas/subscriptionSchema';
import { Scheduler, Constants } from 'oak-js-library';
import { Signer } from '@polkadot/api/types';
import { generateAvatar } from '../../utils/generateAvatar';

export class SubscriptionService {
  private startRecurringPayments() {}
  private scheduler = new Scheduler(OakChains.STUR);

  // Create subscription

  createSubscription = async (transferParameters: CreateSubscriptionType) => {
    const {
      amount,
      category,
      signingAddress,
      receivingAddress,
      subscriberAddress,
      title,
      billingCycle,
      hex,
      imageUrl,
    } = transferParameters;

    //const customErrorHandler = (result) => {...} @Todo
    const txHash = await this.scheduler.sendExtrinsic(hex);

    prismaClient.subscriptions.create({
      data: {
        amount,
        billingCycle,
        category,
        signingAddress,
        subscriberAddress,
        recievingAddress: receivingAddress,
        title,
        txHash,
        imageUrl: imageUrl ? imageUrl : generateAvatar(),
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

  async getWalletSubscriptions(address: string) {
    return await prismaClient.subscriptions.findMany({
      where: { subscriberAddress: address },
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
    const txHash = await this.scheduler.getTaskID(
      subcription.signingAddress,
      subcription?.txHash
    );

    // @Aliemeka//Please check this method that builds the cancel extrinsic, I am not sure of the parametrs it is expecting
    const hex = await this.scheduler.buildCancelTaskExtrinsic(
      subcription.signingAddress, //This has to be the wallet account used in creating the subcription, I am not sure if the signingAddress will do
      txHash, //this is correct
      signer //This is the current signer,
    );
    const cancelTxHash = await this.scheduler.sendExtrinsic(hex);

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
