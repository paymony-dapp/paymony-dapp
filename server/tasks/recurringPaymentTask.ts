import { NativeTransferPayload, OakChains } from '../../utils/types';
import { Recurrer, Scheduler } from 'oak-js-library';
import { Signer, AddressOrPair } from '@polkadot/api/types';
import { HexString } from '@polkadot/util/types';
import uuid from 'uuid';

/**
 * This feature schedules payment task and builds the schedule
 *
 * This utility class will help generate timestamps on more regular cadences:
 * - Hourly
 * - Daily
 * - Weekly
 * - Monthly by Date
 */


export class RecurringPaymentTask {
  private recurrer = new Recurrer();
  private scheduler = new Scheduler(OakChains.STUR);

  private getProvider = () => uuid.v4();

  private async scheduleNativeTransfer(
    address: AddressOrPair,
    providedID: string,
    timestamps: number[],
    receivingAddress: string,
    amount: number,
    signer?: Signer
  ): Promise<HexString | any> {
    try {
      // Code for scheduling here
    } catch (error) {
      // expect error
    }
  }

  // method to cancel task

  // Schedules hourly payment
  async scheduleHourlyPayments(payload: NativeTransferPayload) : Promise<string>{
    const { amount, receiverAddress, recurrences, senderAddress, signer } =
      payload;

    const timestamps: number[] = this.recurrer.getHourlyRecurringTimestamps(
      Date.now(),
      recurrences
    );

    const providerId = this.getProvider();

    const extrinsicHash = await this.scheduleNativeTransfer(
      senderAddress,
      providerId,
      timestamps,
      receiverAddress,
      amount,
      signer
    );

    return extrinsicHash;
  }
  
}
