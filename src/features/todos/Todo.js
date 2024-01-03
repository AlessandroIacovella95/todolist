export default function Todo({ todo, onRemoveTodo }) {
  return (
    <li key={todo.name} className="list-group-item">
      <button className="btn">
        <i className="bi-check-square"></i>
      </button>
      {todo.name}
      <button
        onClick={() => onRemoveTodo(todo)}
        className="btn btn-danger btn-sm"
      >
        Elimina
      </button>
    </li>
  );
}
