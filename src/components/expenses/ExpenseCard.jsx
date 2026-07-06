import "./expense.css";

function ExpenseCard({ expense, payerName }) {
  return (
    <div className="expense-card">

      <div>

        <h3>{expense.title}</h3>

        <p>Paid by {payerName}</p>

        <small>{expense.category}</small>

      </div>

      <div>

        <h2>৳{expense.amount}</h2>

        <small>{expense.date}</small>

      </div>

    </div>
  );
}

export default ExpenseCard;