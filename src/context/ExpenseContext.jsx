import { createContext, useContext, useEffect, useState } from "react";

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  // ==========================
  // State
  // ==========================

  const [members, setMembers] = useState([]);
  const [expenses, setExpenses] = useState([]);

  // ==========================
  // Load LocalStorage
  // ==========================

  useEffect(() => {
    const savedMembers = localStorage.getItem("members");
    const savedExpenses = localStorage.getItem("expenses");

    if (savedMembers) {
      setMembers(JSON.parse(savedMembers));
    }

    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);

  // ==========================
  // Save Members
  // ==========================

  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members));
  }, [members]);

  // ==========================
  // Save Expenses
  // ==========================

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // ==========================
  // Member Functions
  // ==========================

  function addMember(member) {
    setMembers((prev) => [...prev, member]);
  }

  function removeMember(id) {
    setMembers((prev) => prev.filter((member) => member.id !== id));
  }

  // ==========================
  // Expense Functions
  // ==========================

  function addExpense(expense) {
    setExpenses((prev) => [...prev, expense]);
  }

  function removeExpense(id) {
    setExpenses((prev) =>
      prev.filter((expense) => expense.id !== id)
    );
  }

  // ==========================
  // Provider
  // ==========================

  return (
    <ExpenseContext.Provider
      value={{
        // Members
        members,
        setMembers,
        addMember,
        removeMember,

        // Expenses
        expenses,
        setExpenses,
        addExpense,
        removeExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpense() {
  return useContext(ExpenseContext);
}