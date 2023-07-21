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
const CrudFormEdit = ({ updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  const { openNav } = useContext(NavContext);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
      openNav("edit");
    } else setForm(initialForm);
  }, [dataToEdit]);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "category":
        setForm({
          ...form,
          [e.target.name]: e.target.value,
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

    if (!form.tags || !form.prodName || !form.description || !form.price || !form.stock) {
      alert("Datos incompletos");
      return;
    }

    updateData(form);

    handleReset();
  };
  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <>
      <div className="form-container">
        <img onClick={(e) => openNav("home")} className="form-close-btn" src="../src/assets/cerrar.png" alt="" />
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
                <input type="number" name="price" placeholder="Precio" onChange={handleChange} value={form.price} />
              </label>

              <label className="label-category">
                # Categoría
                <input
                  type="text"
                  name="category"
                  placeholder="Categoría"
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

export default CrudFormEdit;
