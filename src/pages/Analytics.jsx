import Layout from "../components/layout/Layout";
import AnalyticsGrid from "../components/analytics/AnalyticsGrid";
import "../components/analytics/analytics.css";

import { useExpense } from "../context/ExpenseContext";
import { calculateBalances } from "../utils/settlement";

function Analytics() {

    const { members, expenses } = useExpense();

    const balances =
        calculateBalances(
            members,
            expenses
        );

    return (

        <Layout>

            <h1>Analytics</h1>

            <br/>

            <AnalyticsGrid
                balances={balances}
            />

        </Layout>

    );

}

export default Analytics;