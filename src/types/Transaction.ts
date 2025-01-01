export type Transaction = {
  id: number;
  operation: string;
  currency1: string;
  amount1: number;
  currency2: string;
  amount2: number;
  rate: number;
  time: string;
  client: string;
};
