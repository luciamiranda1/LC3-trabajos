import { useState } from 'react';
import NuevaTarea from './NuevaTarea';
import ListaTareas from './ListaTareas';

const App = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (titulo) => {
    const nuevaTarea = { titulo, completada: false };
    setTareas([...tareas, nuevaTarea]);
  };

  const alternarTarea = (índice) => {
    const tareasActualizadas = [...tareas];
    tareasActualizadas[índice].completada = !tareasActualizadas[índice].completada;
    setTareas(tareasActualizadas);
  };

  const eliminarTarea = (índice) => {
    const tareasActualizadas = [...tareas];
    tareasActualizadas.splice(índice, 1);
    setTareas(tareasActualizadas);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <NuevaTarea agregarTarea={agregarTarea} />
      <ListaTareas
        tareas={tareas}
        alternarTarea={alternarTarea}
        eliminarTarea={eliminarTarea}
      />
    </div>
  );
};

export default App;

