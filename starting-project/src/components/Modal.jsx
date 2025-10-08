import classes from "./Modal.module.css";

function Modal({ children }) {
  return (
    <>
      <div className={classes.backdrop} />
      <dialogue className={classes.modal}>{children}</dialogue>
    </>
  );
}

export default Modal;
