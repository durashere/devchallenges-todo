export default function List({ active, todos, setTodos }) {
  function ListItem({ todo }) {
    const handleChange = (match) => {
      let updatedTodos = todos.map((todo) => {
        if (todo.content === match) {
          todo.done = !todo.done
        }
        return todo
      })
      setTodos(updatedTodos)
    }

    const handleDelete = (match) => {
      let updatedTodos = todos.filter((todo) => todo.content !== match)
      setTodos(updatedTodos)
    }
    return (
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <input
            id={todo.content}
            type="checkbox"
            checked={todo.done}
            onChange={() => handleChange(todo.content)}
          ></input>
          <label
            htmlFor={todo.content}
            className={`${todo.done && "line-through"}`}
          >
            {todo.content}
          </label>
        </div>
        {active === "Completed" && (
          <button
            onClick={() => handleDelete(todo.content)}
            className="self-end"
          >
            <span className="align-middle text-gray-cBDBDBD material-icons">
              delete_outline
            </span>
          </button>
        )}
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-2">
      {active === "All" &&
        todos.map((todo) => <ListItem key={todo.content} todo={todo} />)}
      {active === "Active" &&
        todos
          .filter((todo) => !todo.done)
          .map((todo) => <ListItem key={todo.content} todo={todo} />)}
      {active === "Completed" &&
        todos
          .filter((todo) => todo.done)
          .map((todo) => <ListItem key={todo.content} todo={todo} />)}
      {active === "Completed" &&
        todos.length !== 0 &&
        todos.find((todo) => todo.done) && (
          <button
            className="self-end mt-4 p-2 w-2/6 rounded-xl text-white bg-red-cEB5757 focus:outline-none"
            onClick={() => setTodos([])}
          >
            Delete all
          </button>
        )}
    </div>
  )
}
