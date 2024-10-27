import React, { useState } from "react";

const TodoList = () => {
  const [tareas, setTareas] = useState([]);
  const [newtarea, setNewTarea] = useState("");

  const addTareas = () => {
    if (newtarea.trim()) {
      setTareas([
        ...tareas,
        {
          id: Date.now(),
          text: newtarea,
          completed: false,
          createdAt: new Date().toLocaleString(),
        },
      ]);
      setNewTarea("");
    }
  };
  const deleteTarea = (id) => {
    setTareas(tareas.filter((tareas) => tareas.id !== id));
  };

  const handlekeyDown = (e) => {
    if (e.key === "Enter") {
      addTareas();
    }
  };
  const toggleComplete = (id) => {
    setTareas(
      tareas.map((tareas) =>
        tareas.id === id ? { ...tareas, completed: !tareas.completed } : tareas
      )
    );
  };

  return (
    <div className="todo-container">
      <h1>Lista de Tareas</h1>
      <div className="stats">
        <p>Tareas pendientes:{tareas.filter(tareas => !tareas.completed).length}</p>


      </div>
      <input
        type="text"
        value={newtarea}
        onChange={(e) => setNewTarea(e.target.value)}
        onKeyDown={handlekeyDown}
        placeholder="Escribe una nueva tarea"
      />
      <button onClick={addTareas}>Añadir Tarea</button>
      <ul className="task-list">
        {tareas.map((tareas) => (
          <li key={tareas.id} className={`task-item ${tareas.completed ? "completed" : ""}`}>
          <span onClick={() => toggleComplete(tareas.id)} className="task-text">
          {tareas.text}
          </span>
            <small>{tareas.createdAt}</small>
            <button onClick={() => deleteTarea(tareas.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
