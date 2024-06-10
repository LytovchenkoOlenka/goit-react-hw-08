import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
// import { Button } from "@mui/material";
import ModalWindow from "../ModalWindow/ModalWindow";
import ModalEditing from "../ModalEditing/ModalEditing";
import { useState } from "react";

export default function Contact({ data: { id, name, number } }) {
  const [isModalDeleting, setIsModalDeleting] = useState(false);
  const [isModalEditing, setIsModalEditing] = useState(false);
  const dispatch = useDispatch();

  const toggleModalDeleting = () => {
    setIsModalDeleting(!isModalDeleting);
  };

  const toggleModalEditind = () => {
    setIsModalEditing(!isModalEditing);
  };

  const handleConfirmDelete = () => {
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
      <data className={css.data} onClick={toggleModalDeleting}>
        <p className={css.text}>
          <IoPerson /> {name}
        </p>
        <p className={css.text}>
          <FaPhoneAlt className={css.icon} /> {number}
        </p>
      </data>
      {/* <button className={css.btn} onClick={handleDelete}>
        Delete
      </button> */}
      {/* <Button className={css.btn} variant="contained" onClick={toggleModal}>
        Edit
      </Button> */}
      <div className={css.btnContainer}>
        <button className={css.btn} onClick={toggleModalDeleting}>
          Delete
        </button>
        <button className={css.btn} onClick={toggleModalEditind}>
          Edit
        </button>
      </div>
      <ModalWindow
        isOpen={isModalDeleting}
        name={name}
        onClose={toggleModalDeleting}
        onConfirm={handleConfirmDelete}
      />
      <ModalEditing
        isOpen={isModalEditing}
        id={id}
        name={name}
        number={number}
        onClose={toggleModalEditind}
      />
    </div>
  );
}
