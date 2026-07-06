import Layout from "../components/layout/Layout";

import ReportSummary from "../components/reports/ReportSummary";
import MemberReport from "../components/reports/MemberReport";
import SettlementReport from "../components/reports/SettlementReport";

import "../components/reports/reports.css";

function Reports() {

  return (

    <Layout>

      <h1>Reports</h1>

      <br />

      <ReportSummary />

      <br />

      <MemberReport />

      <br />

      <SettlementReport />

    </Layout>

  );

}

export default Reports;