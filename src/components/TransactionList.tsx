import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction } from "../features/transactions/transactionSlice";
import type { RootState, AppDispatch } from "../store";

const TransactionList = () => {
  const { transactions, loading } = useSelector((state: RootState) => state.transactions);
  const dispatch = useDispatch<AppDispatch>();

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <div>
      <h3 className="text-xl mb-4 text-gray-700">Transaction History</h3>
      <ul className="space-y-3">
        {transactions.map((t) => (
          <li
            key={t.id}
            className={`p-3 rounded flex justify-between items-center shadow ${
              t.amount >= 0 ? "bg-green-100" : "bg-red-100"
            }`}
          >
            <span>{t.text}: ₹{t.amount}</span>
            <button
              onClick={() => dispatch(deleteTransaction(t.id))}
              className="text-red-500 font-bold text-lg"
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
