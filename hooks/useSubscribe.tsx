import { Wallet } from '@talisman-connect/wallets';
import React from 'react';
// import { RecurringTransferBuilder } from '../lib/recurringTransferBuilder';
import { useWalletStore } from '../store/walletStore';
import { TURUNIT } from '../utils/config';
import {
  DateOfMonth,
  DayOfWeek,
  NativeTransferPayload,
  PlanInterval,
} from '../utils/types';

enum SubscriptionProcessStatus {
  IDLE = 'IDLE',
  SIGNING = 'SIGNING',
  VERIFYING = 'VERIFYING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}

const useSubscribe = () => {
  const wallet = useWalletStore((store) => store.wallet);
  const walletAddress = useWalletStore((store) => store.walletAddress);

  const signTransaction = () => {
    if (wallet?.sign) {
      return wallet.sign(walletAddress, `Subscribe to this plan`);
    }
  };

  const generateExtrinsicHexAndSend = async (
    tranferParameters: NativeTransferPayload,
    billingCycle: PlanInterval,
    period?: number
  ) => {
    try {
      const { recurringTransferBuilder } = await import(
        '../lib/recurringTransferBuilder'
      );

      const timeSlot = period ? period : 0;

      switch (billingCycle) {
        case PlanInterval.HOURLY:
          return await recurringTransferBuilder.buildHourlyExtrinsic(
            tranferParameters
          );
        case PlanInterval.YEARLY:
          return await recurringTransferBuilder.buildDailyExtrinsic(
            tranferParameters
          );
        case PlanInterval.WEEKLY:
          return await recurringTransferBuilder.buildWeeklyExtrinsic(
            tranferParameters,
            timeSlot as DayOfWeek
          );
        case PlanInterval.MONTHLY:
          return await recurringTransferBuilder.buildMonthlyExtrinsic(
            tranferParameters,
            timeSlot as DateOfMonth
          );
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   *
   * Function gets the wallet and initiates a native transfer extrinsic
   * When the entrinsic is successful, it shows a success message
   * If it fails, it shows an error message
   *
   * @param amount number
   * @param billingInterval PlanInterval
   * @param recurrences number
   * @param title string
   * @param category string
   */
  const handleSubscribe = async (
    amount: number,
    billingInterval: PlanInterval,
    recurrences: number,
    receiverAddress: string,
    title: string,
    category: string,
    period?: number
  ) => {
    if (typeof window !== undefined) {
      const { web3FromAddress, web3Enable } = await import(
        '@polkadot/extension-dapp'
      );
      await web3Enable('paymony-dapp');
      const injector = await web3FromAddress(walletAddress);

      try {
        const turAmount = amount * TURUNIT;

        await generateExtrinsicHexAndSend(
          {
            amount: turAmount,
            receiverAddress,
            recurrences,
            senderAddress: walletAddress,
            signer: injector.signer,
          },
          billingInterval,
          period
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  return {
    handleSubscribe,
  };
};

export default useSubscribe;
