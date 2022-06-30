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
