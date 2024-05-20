import { useDispatch } from "react-redux";
import css from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";
// refreshUser,

export default function UserMenu() {
  const dispatch = useDispatch;

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, user</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </div>
  );
}
