import { useSelector } from "react-redux";
import type { RootState } from "../store";

const Balance = () => {
  const { transactions } = useSelector((state: RootState) => state.transactions);
  const total = transactions.reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="mb-6">
      <h3 className="text-xl text-gray-700">Your Balance</h3>
      <h1 className="text-4xl font-bold text-green-500">₹{total}</h1>
    </div>
  );
};

export default Balance;
