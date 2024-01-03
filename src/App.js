import { React, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./features/todos/todosSlice";
import "./App.css";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const todoEl = useRef("");

  const manageClick = (e) => {
    // proprietà current l'elemento a cui facciamo rifermiento in quel momento
    // proprietà value per prendere il valore dell'elemento
    // alert(todoEl.current.value);
    e.preventDefault();
    dispatch(
      addTodo({
        name: todoEl.current.value,
        dueDate: new Date().toLocaleDateString(),
        user_id: 1,
      })
    );
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
              <button onClick={manageClick} className=" ms-1 btn btn-success">
                Add
              </button>
            </div>
          </form>
          <ul className="list-group">
            {todos.map((todo) => (
              <li key={todo.name} className="list-group-item">
                {todo.name}
                <button
                  onClick={() => dispatch(removeTodo(todo))}
                  className="btn btn-danger btn-sm"
                >
                  Elimina
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
