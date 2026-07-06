import { useExpense } from "../../context/ExpenseContext";

function TopSpenders() {
  const { members, expenses } = useExpense();

  const spenders = members.map((member) => {
    const total = expenses
      .filter((expense) => expense.payerId === member.id)
      .reduce((sum, expense) => sum + expense.amount, 0);

    return {
      ...member,
      total,
    };
  });

  spenders.sort((a, b) => b.total - a.total);

  return (
    <div>

      <h2>Top Spenders</h2>

      <br />

      {spenders.slice(0, 5).map((member) => (
        <div
          key={member.id}
          style={{
            background: "#1b1b1b",
            padding: "16px",
            marginBottom: "10px",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <strong>{member.name}</strong>

          <span>৳{member.total}</span>
        </div>
      ))}
    </div>
  );
}

export default TopSpenders;