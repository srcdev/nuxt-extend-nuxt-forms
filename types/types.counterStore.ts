export interface ICounterState {
  n: number;
  incrementedTimes: number;
  decrementedTimes: number;
  numbers: number[];
}

export interface ICounterStore {
  state: ICounterState;
  incrementedTimes: number;
  decrementedTimes: number;
  numbers: number[];

  fail: () => void;

  decrementToZero: () => void;

  changeMe: () => void;

  increment: (value?: number) => void;

  $patch: (callback: (state: ICounterStore) => void) => void;
}
