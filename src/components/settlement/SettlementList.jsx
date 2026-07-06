import SettlementCard from "./SettlementCard";

function SettlementList({ settlements }) {
  if (!settlements.length) {
    return (
      <div className="empty-settlement">
        <h2>🎉 Everyone is Settled!</h2>
        <p>No pending payments.</p>
      </div>
    );
  }

  return (
    <div className="settlement-list">
      {settlements.map((item, index) => (
        <SettlementCard
          key={index}
          settlement={item}
        />
      ))}
    </div>
  );
}

export default SettlementList;