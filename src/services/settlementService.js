import {
  calculateBalances,
  generateSettlements,
} from "../utils/settlement";

export function getSettlementData(members, expenses) {
  const balances = calculateBalances(members, expenses);

  const settlements = generateSettlements(balances);

  return {
    balances,
    settlements,
  };
}