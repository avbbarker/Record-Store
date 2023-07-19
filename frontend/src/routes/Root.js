import { Outlet } from "react-router";
import Nav from "../Nav";

export default function Root() {
  return (
    <div className="m-2.5">
      <Nav />
      <Outlet />
      <footer className="mt-4 text-xs">&copy; 2023 Music Store</footer>
    </div>
  );
}
