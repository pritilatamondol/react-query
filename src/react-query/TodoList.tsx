import useTodos from "./hooks/useTodos";

function TodoList() {
  const { data: todos, error, isLoading } = useTodos();

  if (error) return <p>{error.message}</p>;
  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ul className="list-group">
        {todos?.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
