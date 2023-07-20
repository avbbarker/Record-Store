import { Outlet } from "react-router";
import Nav from "../Nav";
import Footer from "../Footer";
import Header from "../Header";

export default function Root() {
  return (
    <div className="sa">
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
