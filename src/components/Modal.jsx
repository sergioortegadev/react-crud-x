import "./Modal.css";

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalClick = (e) => e.stopPropagation();
  return (
    <article onClick={closeModal} className={`modal ${isOpen && `is-open`}`}>
      <div onClick={handleModalClick} className="modal-container">
        <button onClick={closeModal} className="modal-close">
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
