import { useState, useEffect } from "react";
import { useContext } from "react";
import NavContext from "../context/NavContext";

const initialForm = {
  id: null,
  category: "",
  tags: "",
  prodName: "",
  description: "",
  price: "",
  stock: "",
  images: "",
};

// eslint-disable-next-line react/prop-types
const CrudForm = ({ createData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  const { openNav } = useContext(NavContext);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else setForm(initialForm);
  }, [dataToEdit]);

  const handleChange = (e) => {
    // Actualizamos la var de estado "form", tomando lo que tenía, y con spread operator agregamos lo que viene en cada input.
    //En los input de texto esto es suficiente. Para números, arreglos y otros, hay que usar el siguiente switch: para ajustar el tipo de dato antes de pasarlo a la var de estado.
    switch (e.target.name) {
      case "category":
        setForm({
          ...form,
          [e.target.name]: parseInt(e.target.value),
        });
        break;

      case "stock":
        setForm({
          ...form,
          [e.target.name]: parseInt(e.target.value),
        });
        break;

      case "price":
        setForm({
          ...form,
          [e.target.name]: parseFloat(e.target.value),
        });
        break;

      case "tags":
        setForm({
          ...form,
          [e.target.name]: e.target.value.split(","),
        });
        break;

      case "images":
        setForm({
          ...form,
          [e.target.name]: e.target.value.split(","),
        });
        break;

      default:
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      /*  !form.category || */
      !form.tags ||
      !form.prodName ||
      !form.description ||
      !form.price ||
      !form.stock
    ) {
      alert("Datos incompletos");
      return;
    }

    createData(form);

    handleReset();
  };
  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <>
      <div className="form-container">
        <img
          onClick={(e) => openNav("home")}
          className="form-close-btn"
          src="../src/assets/cerrar.png"
          alt=""
        />
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-input-and-dnd">
            <div className="form-inputs">
              <label className="label-prodName">
                Nombre Producto
                <input
                  type="text"
                  name="prodName"
                  placeholder="Título de la publicación. Nombre producto"
                  onChange={handleChange}
                  value={form.prodName}
                />
              </label>
              <label className="label-description">
                Descripción completa
                <textarea
                  type="text"
                  name="description"
                  placeholder="Descripción del producto"
                  onChange={handleChange}
                  value={form.description}
                />
              </label>
              <label className="label-price">
                Precio
                <input
                  type="number"
                  name="price"
                  placeholder="Precio"
                  onChange={handleChange}
                  value={form.price}
                />
              </label>
              <label className="label-stock">
                Stock
                <input
                  type="number"
                  name="stock"
                  placeholder="Stock - Existencias"
                  onChange={handleChange}
                  value={form.stock}
                />
              </label>
              <label className="label-category">
                # Categoría
                <input
                  type="number"
                  name="category"
                  placeholder="Número de categoría"
                  onChange={handleChange}
                  value={form.category}
                />
              </label>
              <label className="label-tags">
                Etiquetas
                <input
                  type="text"
                  name="tags"
                  placeholder="Separados por coma"
                  onChange={handleChange}
                  value={form.tags}
                />
              </label>

              {/* 
              <label>
                Fotos
                <input
                  type="text"
                  name="images"
                  placeholder="[''/src/assets/product/id-01.jpg'']"
                  onChange={handleChange}
                  value={form.images}
                />
              </label>
              
              <input
          type="number"
          name="id"
          placeholder="id (5 cifras)"
          onChange={handleChange}
          value={form.id}
         /> 
              */}
            </div>
            <div className="form-dnd">
              <img src="../src/assets/dnd.jpg" alt="drag and" />
            </div>
          </div>
          <div className="form-input-btn-div">
            <input type="submit" value="Enviar" />
            <input type="reset" value="Limpiar" onClick={handleReset} />
          </div>
        </form>
      </div>
    </>
  );
};

export default CrudForm;
