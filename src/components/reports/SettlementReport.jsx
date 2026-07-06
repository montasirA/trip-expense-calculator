import { useExpense } from "../../context/ExpenseContext";

import {
  calculateBalances,
  generateSettlements,
} from "../../utils/settlement";

function SettlementReport() {

  const { members, expenses } = useExpense();

  const balances = calculateBalances(
    members,
    expenses
  );

  const settlements =
    generateSettlements(balances);

  return (

    <div>

      <h2>Settlement Report</h2>

      {settlements.length === 0 ? (

        <p>Everything is settled 🎉</p>

      ) : (

        settlements.map((item, index) => (

          <div
            key={index}
            className="settlement-report-card"
          >

            <strong>

              {item.from}

            </strong>

            {" → "}

            <strong>

              {item.to}

            </strong>

            <br />

            ৳ {item.amount.toFixed(2)}

          </div>

        ))

      )}

    </div>

  );
}

export default SettlementReport;