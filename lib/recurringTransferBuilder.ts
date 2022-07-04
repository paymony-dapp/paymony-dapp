import {
  DateOfMonth,
  DayOfWeek,
  NativeTransferPayload,
  OakChains,
} from '../utils/types';
import { Recurrer, Scheduler } from 'oak-js-library';
import { Signer, AddressOrPair } from '@polkadot/api/types';
import { HexString } from '@polkadot/util/types';
import { v4 } from 'uuid';
import { TURUNIT } from '../utils/config';

/**
 * This feature schedules payment task and builds the schedule
 *
 * This utility class will help generate timestamps on more regular cadences:
 * - Hourly
 * - Daily
 * - Weekly
 * - Monthly by Date
 */
export class RecurringTransferBuilder {
  private recurrer = new Recurrer();
  private scheduler = new Scheduler(OakChains.STUR);

  /**
   * Validates the transaction parameters and timestamps
   *
   * @param amount number
   * @param sendingAddress string
   * @param receivingAddress string
   * @param timestamps number[]
   */
  private validateTransParameters(
    amount: number,
    sendingAddress: AddressOrPair,
    receivingAddress: string,
    timestamps: number[]
  ) {
    this.scheduler.validateTransferParams(
      amount,
      sendingAddress,
      receivingAddress
    );
    try {
      this.scheduler.validateTimestamps(timestamps);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Builds native transfer extrinsic for the Oak blockchain
   *
   * @param address string
   * @param timestamps number[]
   * @param receivingAddress string
   * @param amount number
   * @param signer
   * @returns
   */
  private async buildNativeTransferHex(
    address: AddressOrPair,
    timestamps: number[],
    receivingAddress: string,
    amount: number,
    signer?: Signer
  ): Promise<HexString> {
    try {
      this.validateTransParameters(
        amount,
        address,
        receivingAddress,
        timestamps
      );
      const providedId = v4();
      const hex = (await this.scheduler.buildScheduleNativeTransferExtrinsic(
        address,
        providedId,
        timestamps,
        receivingAddress,
        amount,
        signer
      )) as HexString;
      return hex;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Hourly task transfer extrinic
   *
   * @param payload NativeTransferPayload
   * @returns `0x${string}`
   */
  async buildHourlyExtrinsic(
    payload: NativeTransferPayload
  ): Promise<HexString> {
    try {
      const { amount, receiverAddress, recurrences, senderAddress, signer } =
        payload;
      console.log('Hourly hex');

      const timestamps: number[] = this.recurrer.getHourlyRecurringTimestamps(
        Date.now(),
        recurrences
      );

      const extrinsicHex = await this.buildNativeTransferHex(
        senderAddress,
        timestamps,
        receiverAddress,
        amount,
        signer
      );

      return extrinsicHex;
    } catch (error) {
      throw error;
    }
  }

  async buildDailyExtrinsic(
    payload: NativeTransferPayload
  ): Promise<HexString> {
    try {
      const { amount, receiverAddress, recurrences, senderAddress, signer } =
        payload;
      const hourOfDay = 12;

      const timestamps: number[] = this.recurrer.getDailyRecurringTimestamps(
        Date.now(),
        recurrences,
        hourOfDay
      );

      const extrinsicHex = await this.buildNativeTransferHex(
        senderAddress,
        timestamps,
        receiverAddress,
        amount,
        signer
      );

      return extrinsicHex;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Builds extrinsic for weekly subscriptions
   *
   * @param transferPayload NativeTransferPayload
   * @param dayOfWeek DayofWeek
   * @returns HexString
   */
  async buildWeeklyExtrinsic(
    transferPayload: NativeTransferPayload,
    dayOfWeek: DayOfWeek
  ): Promise<HexString> {
    try {
      const { amount, receiverAddress, recurrences, senderAddress, signer } =
        transferPayload;

      const hourOfDay = 12;

      const timestamps: number[] = this.recurrer.getWeeklyRecurringTimestamps(
        Date.now(),
        recurrences,
        hourOfDay,
        dayOfWeek
      );

      const extrinsicHex = await this.buildNativeTransferHex(
        senderAddress,
        timestamps,
        receiverAddress,
        amount,
        signer
      );

      return extrinsicHex;
    } catch (error) {
      console.log('Error');
      throw error;
    }
  }

  /**
   * Build extrinsic for monthly subscriptions
   *
   *
   * @param transferPayload NativeTranferPayload
   * @param dateOfMonth DateOfMonth
   * @returns `0x${string}`
   */
  async buildMonthlyExtrinsic(
    transferPayload: NativeTransferPayload,
    dateOfMonth: DateOfMonth
  ) {
    const { amount, receiverAddress, recurrences, senderAddress, signer } =
      transferPayload;

    const hourOfDay = 12;
    const timestamps = this.recurrer.getMonthlyRecurringTimestampsByDate(
      Date.now(),
      recurrences,
      hourOfDay,
      dateOfMonth
    );

    const extrinsicHex = await this.buildNativeTransferHex(
      senderAddress,
      timestamps,
      receiverAddress,
      amount,
      signer
    );

    return extrinsicHex;
  }
}

export const recurringTransferBuilder = new RecurringTransferBuilder();
