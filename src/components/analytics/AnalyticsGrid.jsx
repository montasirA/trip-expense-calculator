import AnalyticsCard from "./AnalyticsCard";

function AnalyticsGrid({ balances }) {
  return (
    <div className="analytics-grid">
      {balances.map((member) => (
        <AnalyticsCard
          key={member.id}
          member={member}
        />
      ))}
    </div>
  );
}

export default AnalyticsGrid;