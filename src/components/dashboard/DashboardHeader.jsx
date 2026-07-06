import "./dashboard.css";

function DashboardHeader() {
  return (
    <div className="dashboard-header">

      <div>

        <h1>Good Evening 👋</h1>

        <p>
          Manage all your group tour expenses from one dashboard.
        </p>

      </div>

      <button className="primary-btn">

        + Add Expense

      </button>

    </div>
  );
}

export default DashboardHeader;