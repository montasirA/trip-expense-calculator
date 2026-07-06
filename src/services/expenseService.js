export function getCategorySummary(expenses) {
  const summary = {};

  expenses.forEach((expense) => {
    if (!summary[expense.category]) {
      summary[expense.category] = 0;
    }

    summary[expense.category] += expense.amount;
  });

  return summary;
}

export function getRecentExpenses(expenses, limit = 5) {
  return [...expenses]
    .sort((a, b) => b.id - a.id)
    .slice(0, limit);
}

export function getHighestExpense(expenses) {
  if (expenses.length === 0) return 0;

  return Math.max(...expenses.map((expense) => expense.amount));
}

export function getTotalExpense(expenses) {
  return expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
}

export function getAverageExpense(expenses, members) {
  if (members.length === 0) return 0;

  return getTotalExpense(expenses) / members.length;
}