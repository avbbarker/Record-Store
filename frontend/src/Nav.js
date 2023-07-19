import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex justify-between">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-2xl hover:italic ${isActive && "font-semibold"}`
        }
      >
        Record Store
      </NavLink>
      <div className="flex gap-5 items-center">
        <NavLink
          to="shop"
          className={({ isActive }) =>
            `px-1.5 hover:underline ${isActive && "font-semibold"}`
          }
        >
          Our albums
        </NavLink>
        <NavLink
          to="playlist"
          className={({ isActive }) =>
            `px-1.5 hover:underline ${isActive && "font-semibold"}`
          }
        >
          Playlist
        </NavLink>
      </div>
    </nav>
  );
}
