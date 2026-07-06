// Calculate each member's paid, share and balance
export function calculateBalances(members, expenses) {
  const balances = {};

  // Initialize all members
  members.forEach((member) => {
    balances[member.id] = {
      id: member.id,
      name: member.name,
      paid: 0,
      share: 0,
      balance: 0,
    };
  });

  // Calculate paid & share
  expenses.forEach((expense) => {
    if (!expense.participants || expense.participants.length === 0) return;

    const share = expense.amount / expense.participants.length;

    // Add paid amount
    if (balances[expense.payerId]) {
      balances[expense.payerId].paid += expense.amount;
    }

    // Add share amount
    expense.participants.forEach((id) => {
      if (balances[id]) {
        balances[id].share += share;
      }
    });
  });

  // Calculate final balance
  Object.values(balances).forEach((member) => {
    member.balance = member.paid - member.share;
  });

  return Object.values(balances);
}

// Generate settlement transactions
export function generateSettlements(balances) {
  const creditors = [];
  const debtors = [];

  balances.forEach((member) => {
    if (member.balance > 0.01) {
      creditors.push({
        ...member,
        balance: member.balance,
      });
    } else if (member.balance < -0.01) {
      debtors.push({
        ...member,
        balance: Math.abs(member.balance),
      });
    }
  });

  const settlements = [];

  let i = 0;
  let j = 0;

  while (i < debtors.length && j < creditors.length) {
    const debtor = debtors[i];
    const creditor = creditors[j];

    const amount = Math.min(debtor.balance, creditor.balance);

    settlements.push({
      from: debtor.name,
      to: creditor.name,
      amount,
    });

    debtor.balance -= amount;
    creditor.balance -= amount;

    if (debtor.balance <= 0.01) i++;
    if (creditor.balance <= 0.01) j++;
  }

  return settlements;
}