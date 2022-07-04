export interface AutomationTask {
  ownerId: string;
  providedId: `0x${string}`;
  execution_times: number[];
  executions_left: number;
  action: AutomationTaskNotifyAction | AutomationTaskTransferAction;
}

export interface AutomationTaskNotifyAction {
  notify: {
    message: `0x${string}`;
  };
}

export interface AutomationTaskTransferAction {
  nativeTransfer: {
    sender: string;
    recipient: string;
    amount: number;
  };
}

export interface MissedTask {
  task_id: string;
  execution_time: number;
}

export type HourOfDay =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;

export type DayOfWeek = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type DateOfMonth =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31;

export type WeekOfMonth = 1 | 2 | 3 | 4;

export enum OakChains {
  STUR = 'STUR',
  TUR = 'TUR',
}

export enum PlanInterval {
  HOURLY = 'HOURLY',
  // DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY',
}

export enum OakChainSchedulingLimit {
  STUR = 6 * 30 * 24 * 60 * 60 * 1000,
  TUR = 6 * 30 * 24 * 60 * 60 * 1000,
}

export interface NativeTransferPayload {
  senderAddress: string;
  receiverAddress: string;
  recurrences: number;
  amount: number;
  signer: any;
}

export interface NativeTransferAction {
  senderAddress: string;
  receiverAddress: string;
  amount: string;
  signer: any;
  providedId: string;
  timestamps: string[];
}

export interface Plan {
  id: string;
  name: string | null;
  amount: number;
  billingCycle: PlanInterval;
  category: string;
  description: string;
  isPublic: boolean;
  accessUrl: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  userWallet: string;
}
