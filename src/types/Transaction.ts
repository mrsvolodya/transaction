export type Transaction = {
  id?: string;
  currency1: string;
  currency2: string;
  amount1: number;
  amount2: number;
  operation: string;
  time?: string;
  amount?: number;
  rate: number;
  amountFromClient?: number;
  client: string;
  comments?: string;
};
