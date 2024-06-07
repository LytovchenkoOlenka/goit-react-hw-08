import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { Button } from "@mui/material";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handlerLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome,{user.name}</p>
      <button className={css.btn} onClick={handlerLogOut}>
        Log out
      </button>
      {/* <Button variant="contained" onClick={handlerLogOut}>
        Log out
      </Button> */}
    </div>
  );
}
