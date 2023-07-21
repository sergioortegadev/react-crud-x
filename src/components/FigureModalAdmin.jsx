import Modal from "./Modal.jsx";
import "./Modal.css";

export const FigureModalAdmin = ({
  data,
  isOpenModal,
  closeModal,
  sumarCantidad,
  cantidad,
  restarCantidad,
  agregarCarrito,
}) => {
  const { image, prodName, description, price } = data;
  return (
    <>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <div className="modal-head">
          <img src={image} alt={prodName} />
          <div className="modal-tit">
            <h3>{prodName}</h3>
            <div className="modal-buttons">
              {/* <button className="modal-btn-mas-menos" onClick={sumarCantidad}>
                +
              </button>
              <p className="modal-cantidad">{cantidad}</p>
              <button className="modal-btn-mas-menos" onClick={restarCantidad}>
                -
              </button> */}
              <button onClick={agregarCarrito} className="btn-agregar-carrito">
                <h2>Comprar ${cantidad * price}</h2>
              </button>
            </div>
          </div>
        </div>
        <p>{description}</p>
      </Modal>
    </>
  );
};
