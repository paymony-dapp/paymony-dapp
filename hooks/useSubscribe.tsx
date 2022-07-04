import { Wallet } from '@talisman-connect/wallets';
import React from 'react';
// import { RecurringTransferBuilder } from '../lib/recurringTransferBuilder';
import { useWalletStore } from '../store/walletStore';
import { PlanInterval } from '../utils/types';

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
    category: string
  ) => {
    // const recurringTransferBuilder = new RecurringTransferBuilder();
    if (typeof window !== undefined) {
      const { web3FromAddress, web3Enable } = await import(
        '@polkadot/extension-dapp'
      );
      await web3Enable('paymony-dapp');
      const injector = await web3FromAddress(walletAddress);
      try {
        const { recurringTransferBuilder } = await import(
          '../lib/recurringTransferBuilder'
        );
        console.log(recurringTransferBuilder);
        const hex = await recurringTransferBuilder.buildHourlyExtrinsic({
          amount,
          receiverAddress,
          recurrences,
          senderAddress: walletAddress,
          signer: injector.signer,
        });
        console.log(hex);
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
