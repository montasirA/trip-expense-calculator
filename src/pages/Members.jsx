import Layout from "../components/layout/Layout";
import MemberForm from "../components/members/MemberForm";
import MemberList from "../components/members/MemberList";

function Members() {
  return (
    <Layout>
      <h1>Members</h1>

      <MemberForm />

      <MemberList />
    </Layout>
  );
}

export default Members;