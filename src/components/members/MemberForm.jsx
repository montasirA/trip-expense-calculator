import { useState } from "react";
import { useExpense } from "../../context/ExpenseContext";
import "./member.css";

function MemberForm() {
  const [name, setName] = useState("");
  const { members, setMembers } = useExpense();

  function handleSubmit(e) {
    e.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) {
      alert("Please enter a member name.");
      return;
    }

    const exists = members.some(
      (member) =>
        member.name.toLowerCase() === trimmedName.toLowerCase()
    );

    if (exists) {
      alert("This member already exists.");
      return;
    }

    const newMember = {
      id: Date.now(),
      name: trimmedName,
    };

    setMembers([...members, newMember]);
    setName("");
  }

  return (
    <form className="member-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter member name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">+ Add Member</button>
    </form>
  );
}

export default MemberForm;