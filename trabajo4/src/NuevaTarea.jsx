import { useState } from 'react';
import PropTypes from 'prop-types';

const NuevaTarea = ({ agregarTarea }) => {
  const [nuevaTarea, setNuevaTarea] = useState('');

  const handleChange = (evento) => {
    setNuevaTarea(evento.target.value);
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    if (nuevaTarea.trim() !== '') {
      agregarTarea(nuevaTarea);
      setNuevaTarea('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nuevaTarea}
        onChange={handleChange}
        placeholder="Ingresar tarea"
      />
      <button type="submit">Agregar tarea</button>
    </form>
  );
};

NuevaTarea.propTypes = {
  agregarTarea: PropTypes.func.isRequired,
};

export default NuevaTarea;