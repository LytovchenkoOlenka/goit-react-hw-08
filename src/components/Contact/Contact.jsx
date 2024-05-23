import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { Button } from "@mui/material";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success("Contact was deleted");
      })
      .catch(() => {
        toast.error("Sorry, contact wasn`t deleted. Please try again");
      });
  };

  return (
    <div className={css.container}>
      <data className={css.data}>
        <p className={css.text}>
          <IoPerson /> {name}
        </p>
        <p className={css.text}>
          <FaPhoneAlt /> {number}
        </p>
      </data>
      {/* <button className={css.btn} onClick={handleDelete}>
        Delete
      </button> */}
      <Button className={css.btn} variant="contained" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
}
