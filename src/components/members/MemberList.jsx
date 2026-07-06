import { useExpense } from "../../context/ExpenseContext";
import "./member.css";

function MemberList() {
  const { members, setMembers } = useExpense();

  function deleteMember(id) {
    const updated = members.filter((member) => member.id !== id);
    setMembers(updated);
  }

  return (
    <div className="member-list">
      {members.length === 0 ? (
        <p>No members added yet.</p>
      ) : (
        members.map((member) => (
          <div className="member-card" key={member.id}>
            <div className="avatar">
              {member.name.charAt(0).toUpperCase()}
            </div>

            <span>{member.name}</span>

            <button onClick={() => deleteMember(member.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default MemberList;