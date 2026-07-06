import { calculateBalances } from "../utils/settlement";

export function getAnalytics(members, expenses) {
  const balances = calculateBalances(members, expenses);

  const totalExpense = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const totalPaid = balances.reduce(
    (sum, member) => sum + member.paid,
    0
  );

  const totalReceive = balances
    .filter((member) => member.balance > 0)
    .reduce((sum, member) => sum + member.balance, 0);

  const totalPay = balances
    .filter((member) => member.balance < 0)
    .reduce((sum, member) => sum + Math.abs(member.balance), 0);

  const topSpender =
    balances.length > 0
      ? balances.reduce((a, b) => (a.paid > b.paid ? a : b))
      : null;

  return {
    balances,
    totalExpense,
    totalPaid,
    totalReceive,
    totalPay,
    topSpender,
  };
}