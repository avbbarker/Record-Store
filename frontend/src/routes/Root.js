import { Outlet } from "react-router";
import Nav from "../Nav";
import Footer from "../Footer";
import Header from "../Header";

export default function Root() {
  return (
    <div className="site">
      <Header />
      <Nav />
      <Outlet />
      <div className="page-spacer-bottom">
        <br />
      </div>
      <Footer />
    </div>
  );
}
