import { useExpense } from "../../context/ExpenseContext";

function ReportSummary() {
  const { members, expenses } = useExpense();

  const totalExpense = expenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const highestExpense =
    expenses.length > 0
      ? Math.max(...expenses.map((item) => item.amount))
      : 0;

  const average =
    members.length > 0
      ? totalExpense / members.length
      : 0;

  return (
    <div className="report-summary">

      <div className="report-card">
        <h3>Members</h3>
        <h2>{members.length}</h2>
      </div>

      <div className="report-card">
        <h3>Expenses</h3>
        <h2>{expenses.length}</h2>
      </div>

      <div className="report-card">
        <h3>Total Expense</h3>
        <h2>৳ {totalExpense.toFixed(2)}</h2>
      </div>

      <div className="report-card">
        <h3>Average Share</h3>
        <h2>৳ {average.toFixed(2)}</h2>
      </div>

      <div className="report-card">
        <h3>Highest Expense</h3>
        <h2>৳ {highestExpense.toFixed(2)}</h2>
      </div>

    </div>
  );
}

export default ReportSummary;