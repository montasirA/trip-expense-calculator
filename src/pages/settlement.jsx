import Layout from "../components/layout/Layout";
import SettlementList from "../components/settlement/SettlementList";
import "../components/settlement/settlement.css";

import { useExpense } from "../context/ExpenseContext";

import {
  calculateBalances,
  generateSettlements,
} from "../utils/settlement";

function Settlement() {
  const { members, expenses } = useExpense();

  const balances = calculateBalances(
    members,
    expenses
  );

  const settlements =
    generateSettlements(balances);

  return (
    <Layout>

      <div
        style={{
          marginBottom: "30px",
        }}
      >
        <h1>Settlement</h1>

        <p
          style={{
            color: "#999",
          }}
        >
          Final payment instructions for everyone.
        </p>
      </div>

      <SettlementList
        settlements={settlements}
      />

    </Layout>
  );
}

export default Settlement;