import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-bar-pages">
          <div className="nav-bar-items">
            <div className="nav-item-pages">
              <NavLink className="nav-item" to="/">
                Home
              </NavLink>

              <NavLink className="nav-item" to="shop">
                Shop
              </NavLink>
              <NavLink className="nav-item" to="about">
                About
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
