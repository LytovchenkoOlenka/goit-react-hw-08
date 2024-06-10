import css from "./ModalDeleting.module.css";

export default function ModalDeleting({ isOpen, name, onConfirm, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={css.modalBackdrop}>
      <div className={css.modal}>
        <p className={css.text}>
          Are you sure you want to delete the contact {name}?
        </p>
        <div className={css.buttons}>
          <button className={css.btn} onClick={onConfirm}>
            Yes
          </button>
          <button className={css.btn} onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}
