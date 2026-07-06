import "./card.css";

function Card({ title, value, icon }) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>

      <h4>{title}</h4>

      <h2>{value}</h2>
    </div>
  );
}

export default Card;