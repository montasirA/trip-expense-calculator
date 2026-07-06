import { useExpense } from "../../context/ExpenseContext";
import ExpenseCard from "./ExpenseCard";

function ExpenseList() {

  const { expenses, members } = useExpense();

  if (expenses.length === 0) {

    return <p>No expenses added yet.</p>;

  }

  return (

    <div>

      {expenses.map((expense) => {

        const payer = members.find(
          (member) => member.id === expense.payerId
        );

        return (
          <ExpenseCard
            key={expense.id}
            expense={expense}
            payerName={payer ? payer.name : "Unknown"}
          />
        );

      })}

    </div>

  );

}

export default ExpenseList;