import Card from "../common/Card";
import {
  FaUsers,
  FaMoneyBillWave,
  FaWallet,
  FaArrowUp,
} from "react-icons/fa";

import { useExpense } from "../../context/ExpenseContext";

import {
  getTotalExpense,
  getAverageShare,
  getHighestExpense,
} from "../../utils/calculations";

import "./stats.css";

function StatsGrid() {
  const { members, expenses } = useExpense();

  return (
    <div className="stats-grid">
      <Card
        title="Members"
        value={members.length}
        icon={<FaUsers />}
      />

      <Card
        title="Total Expense"
        value={`৳${getTotalExpense(expenses)}`}
        icon={<FaMoneyBillWave />}
      />

      <Card
        title="Average Share"
        value={`৳${getAverageShare(expenses, members).toFixed(2)}`}
        icon={<FaWallet />}
      />

      <Card
        title="Highest Expense"
        value={`৳${getHighestExpense(expenses)}`}
        icon={<FaArrowUp />}
      />
    </div>
  );
}

export default StatsGrid;