import { useState } from "react";
import { useExpense } from "../../context/ExpenseContext";
import "./expense.css";

function ExpenseForm() {
  const { members, addExpense } = useExpense();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [payerId, setPayerId] = useState("");
  const [category, setCategory] = useState("Food");
  const [note, setNote] = useState("");
  const [participants, setParticipants] = useState([]);

  function toggleParticipant(id) {
    if (participants.includes(id)) {
      setParticipants(participants.filter((p) => p !== id));
    } else {
      setParticipants([...participants, id]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !amount || !payerId || participants.length === 0) {
      alert("Please fill all required fields.");
      return;
    }

    addExpense({
      id: Date.now(),
      title,
      amount: Number(amount),
      payerId: Number(payerId),
      category,
      note,
      participants,
      date: new Date().toLocaleDateString(),
    });

    setTitle("");
    setAmount("");
    setPayerId("");
    setCategory("Food");
    setNote("");
    setParticipants([]);
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={payerId}
        onChange={(e) => setPayerId(e.target.value)}
      >
        <option value="">Who Paid?</option>

        {members.map((member) => (
          <option key={member.id} value={member.id}>
            {member.name}
          </option>
        ))}
      </select>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Food</option>
        <option>Hotel</option>
        <option>Transport</option>
        <option>Shopping</option>
        <option>Ticket</option>
        <option>Other</option>
      </select>

      <textarea
        placeholder="Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <h3>Participants</h3>

      <div className="participants">

        {members.map((member) => (

          <label key={member.id}>

            <input
              type="checkbox"
              checked={participants.includes(member.id)}
              onChange={() => toggleParticipant(member.id)}
            />

            {member.name}

          </label>

        ))}

      </div>

      <button type="submit">

        Save Expense

      </button>

    </form>
  );
}

export default ExpenseForm;