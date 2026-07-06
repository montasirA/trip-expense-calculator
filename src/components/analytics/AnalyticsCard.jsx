import BalanceBadge from "./BalanceBadge";

function AnalyticsCard({ member }) {
  return (
    <div className="analytics-card">
      <h3>{member.name}</h3>

      <p>
        <strong>Paid:</strong> ৳ {member.paid.toFixed(2)}
      </p>

      <p>
        <strong>Share:</strong> ৳ {member.share.toFixed(2)}
      </p>

      <p>
        <strong>Balance:</strong> ৳{" "}
        {Math.abs(member.balance).toFixed(2)}
      </p>

      <BalanceBadge balance={member.balance} />
    </div>
  );
}

export default AnalyticsCard;