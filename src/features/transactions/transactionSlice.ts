import { createSlice, type PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { Transaction, TransactionState } from "./transactionTypes";

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async () => {
    const dummyData: Transaction[] = [
      { id: 1, text: "Salary", amount: 5000 },
      { id: 2, text: "Rent", amount: -2000 },
    ];
    return new Promise<Transaction[]>((resolve) =>
      setTimeout(() => resolve(dummyData), 1000)
    );
  }
);

const initialState: TransactionState = {
  transactions: [],
  loading: false,
  error: null,
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.unshift(action.payload);
    },
    deleteTransaction: (state, action: PayloadAction<number>) => {
      state.transactions = state.transactions.filter(
        (t) => t.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch transactions";
      });
  },
});

export const { addTransaction, deleteTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
