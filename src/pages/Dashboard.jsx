import Layout from "../components/layout/Layout";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsGrid from "../components/dashboard/StatsGrid";
import RecentExpenses from "../components/dashboard/RecentExpenses";
import TopSpenders from "../components/dashboard/TopSpenders";

function Dashboard() {
  return (
    <Layout>
      <DashboardHeader />

      <StatsGrid />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <RecentExpenses />

        <TopSpenders />
      </div>
    </Layout>
  );
}

export default Dashboard;