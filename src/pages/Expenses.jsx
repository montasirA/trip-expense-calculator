import Layout from "../components/layout/Layout";
import ExpenseForm from "../components/expenses/ExpenseForm";
import ExpenseList from "../components/expenses/ExpenseList";

function Expenses() {
  return (
    <Layout>

      <h1>Expenses</h1>

      <ExpenseForm />

      <ExpenseList />

    </Layout>
  );
}

export default Expenses;