import { useExpense } from "../../context/ExpenseContext";
import { getRecentExpenses } from "../../utils/calculations";

function RecentExpenses() {
  const { expenses, members } = useExpense();

  const recent = getRecentExpenses(expenses);

  if (recent.length === 0) {
    return <p>No recent expenses.</p>;
  }

  return (
    <div>
      <h2>Recent Expenses</h2>

      <br />

      {recent.map((expense) => {
        const payer = members.find(
          (member) => member.id === expense.payerId
        );

        return (
          <div
            key={expense.id}
            style={{
              background: "#1b1b1b",
              padding: "18px",
              marginBottom: "12px",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <strong>{expense.title}</strong>

              <br />

              <small>
                Paid by {payer ? payer.name : "Unknown"}
              </small>
            </div>

            <h3>৳{expense.amount}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default RecentExpenses;