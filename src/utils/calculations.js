export function getTotalExpense(expenses) {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
}

export function getAverageShare(expenses, members) {
  if (members.length === 0) return 0;

  const total = getTotalExpense(expenses);

  return total / members.length;
}

export function getHighestExpense(expenses) {
  if (expenses.length === 0) return 0;

  return Math.max(...expenses.map((expense) => expense.amount));
}

export function getRecentExpenses(expenses, limit = 5) {
  return [...expenses]
    .sort((a, b) => b.id - a.id)
    .slice(0, limit);
}