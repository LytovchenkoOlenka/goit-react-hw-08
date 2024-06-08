import EditForm from "../EditForm/EditForm";
import css from "./ModalEditing.module.css";
import { AiFillCloseCircle } from "react-icons/ai";

export default function ModalEditing({ isOpen, name, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={css.modalBackdrop}>
      <div className={css.modal}>
        <button className={css.closeBtn} onClick={onClose}>
          <AiFillCloseCircle className={css.icon} />
        </button>
        <p className={css.text}>Edit contact {name}</p>
        <EditForm />
      </div>
    </div>
  );
}
