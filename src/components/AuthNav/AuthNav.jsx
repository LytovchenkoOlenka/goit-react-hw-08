import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

export default function AuthNav() {
  const getNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav className={css.nav}>
      <NavLink to="/register" className={getNavLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={getNavLinkClass}>
        Log In
      </NavLink>
    </nav>
  );
}
