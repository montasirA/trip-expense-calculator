function SettlementCard({ settlement }) {
  return (
    <div className="settlement-card">
      <div className="settlement-header">
        <div className="person from">
          <h3>{settlement.from}</h3>
          <span>Pays</span>
        </div>

        <div className="arrow">➡️</div>

        <div className="person to">
          <h3>{settlement.to}</h3>
          <span>Receives</span>
        </div>
      </div>

      <div className="amount">
        ৳ {settlement.amount.toFixed(2)}
      </div>
    </div>
  );
}

export default SettlementCard;