import { React, useState, useEffect, useRef } from "react";
import "./App.css";

const initTodos = [
  {
    name: "Call my mom",
    dueDate: new Date().toLocaleDateString(),
    user_id: 1,
  },

  {
    name: "Go to school",
    dueDate: new Date().toLocaleDateString(),
    user_id: 2,
  },

  {
    name: "Do homework",
    dueDate: new Date().toLocaleDateString(),
    user_id: 3,
  },
];
function App() {
  const [todos, setTodos] = useState([]);
  const todoEl = useRef("");
  useEffect(() => {
    setTodos(initTodos);

    return () => {};
  }, [todos]);

  const addTodo = (e) => {
    // proprietà current l'elemento a cui facciamo rifermiento in quel momento
    // proprietà value per prendere il valore dell'elemento
    // alert(todoEl.current.value);
    e.preventDefault();
    const newTodo = {
      name: todoEl.current.value,
      user_id: 4,
      dueDate: new Date().toLocaleDateString(),
    };
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="App container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>My TodoList</h1>
          <form className="my-4">
            <div className="form-group">
              <input
                ref={todoEl}
                id="todo"
                name="todo"
                className="form-field"
              />
              <button onClick={addTodo} className=" ms-1 btn btn-success">
                Add
              </button>
            </div>
          </form>
          <ul className="list-group">
            {todos.map((todo) => (
              <li key={todo.user_id} className="list-group-item">
                {todo.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
