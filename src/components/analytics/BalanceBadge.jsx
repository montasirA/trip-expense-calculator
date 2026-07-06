function BalanceBadge({ balance }) {

  if (balance > 0) {
    return (
      <span className="receive">
        Will Receive
      </span>
    );
  }

  if (balance < 0) {
    return (
      <span className="pay">
        Need To Pay
      </span>
    );
  }

  return (
    <span className="settled">
      Settled
    </span>
  );

}

export default BalanceBadge;