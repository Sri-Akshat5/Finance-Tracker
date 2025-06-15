import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../features/transactions/transactionSlice";
import type { Transaction } from "../features/transactions/transactionTypes";
import type { AppDispatch } from "../store";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTransaction: Transaction = {
      id: Date.now(),
      text,
      amount,
    };

    dispatch(addTransaction(newTransaction));
    setText("");
    setAmount(0);
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl mb-4 text-gray-700">Add New Transaction</h3>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Transaction Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
