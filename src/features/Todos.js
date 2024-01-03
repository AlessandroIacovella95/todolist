import Todo from "./todos/Todo";
import { removeTodo } from "./todos/todosSlice";
import { useDispatch } from "react-redux";

export const Todos = ({ todos }) => {
  const dispatch = useDispatch();
  const onRemove = (todo) => {
    dispatch(removeTodo(todo));
  };
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <Todo todo={todo} onRemoveTodo={onRemove} />
      ))}
    </ul>
  );
};
export default Todos;
