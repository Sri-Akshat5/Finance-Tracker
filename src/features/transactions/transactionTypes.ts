export interface Transaction {
  id: number;
  text: string;
  amount: number;
}

export interface TransactionState {
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
}
