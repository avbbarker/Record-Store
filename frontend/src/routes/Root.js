import { Outlet } from "react-router";
import Nav from "../Nav";

// testing lol

export default function Root() {
  return (
    <div className="m-2.5">
      <Nav />
      <Outlet />
      <footer className="mt-4 text-xs"></footer>
    </div>
  );
}
