import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTransactions } from "./features/transactions/transactionSlice";
import type { AppDispatch } from "./store";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Finance Tracker</h2>
        <Balance />
        <AddTransaction />
        <TransactionList />
      </div>
    </div>
  );
};

export default App;
