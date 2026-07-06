import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <div className="app-layout">

        <Sidebar />

        <main className="main-content">

          {children}

        </main>

      </div>
    </>
  );
}

export default Layout;