import { useExpense } from "../../context/ExpenseContext";
import { calculateBalances } from "../../utils/settlement";

function MemberReport() {

  const { members, expenses } = useExpense();

  const balances = calculateBalances(
    members,
    expenses
  );

  return (
    <div>

      <h2>Member Report</h2>

      {balances.map((member) => (

        <div
          key={member.id}
          className="member-report-card"
        >

          <h3>{member.name}</h3>

          <p>Paid : ৳ {member.paid.toFixed(2)}</p>

          <p>Share : ৳ {member.share.toFixed(2)}</p>

          <p>
            Balance :
            {" "}
            {member.balance >= 0
              ? "+"
              : "-"}
            ৳
            {Math.abs(member.balance).toFixed(2)}
          </p>

        </div>

      ))}

    </div>
  );
}

export default MemberReport;