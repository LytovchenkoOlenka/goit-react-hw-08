import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { Button } from "@mui/material";
import ModalWindow from "../ModalWindow/ModalWindow";
import { useState } from "react";

export default function Contact({ data: { id, name, number } }) {
  const [isModal, setIsModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsModal(!isModal);
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
      <data className={css.data} onClick={toggleModal}>
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
      <Button className={css.btn} variant="contained" onClick={toggleModal}>
        Delete
      </Button>
      <ModalWindow
        isOpen={isModal}
        name={name}
        onClose={toggleModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
