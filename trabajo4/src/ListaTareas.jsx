import PropTypes from 'prop-types';

const ListaTareas = ({ tareas, alternarTarea, eliminarTarea }) => {
  return (
    <ul>
      {tareas.map((tarea, índice) => (
        <li key={índice}>
          <input
            type="checkbox"
            checked={tarea.completada}
            onChange={() => alternarTarea(índice)}
          />
          <span style={{ color: tarea.completada ? 'lightgray' : 'black', textDecoration: tarea.completada ? 'line-through' : 'none' }}>
            {tarea.titulo}
          </span>
          <button onClick={() => eliminarTarea(índice)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

ListaTareas.propTypes = {
  tareas: PropTypes.arrayOf(
    PropTypes.shape({
      titulo: PropTypes.string.isRequired,
      completada: PropTypes.bool.isRequired
    })
  ).isRequired,
  alternarTarea: PropTypes.func.isRequired,
  eliminarTarea: PropTypes.func.isRequired
};

export default ListaTareas;