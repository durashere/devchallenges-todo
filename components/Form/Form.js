import { useState } from "react"

export default function Form({ todos, setTodos }) {
  const [value, setValue] = useState("")
  const [placeholder, setPlaceholder] = useState("Add details")

  const handleAdd = (value) => {
    if (todos.find((todo) => todo.content === value)) {
      setPlaceholder("Todo already exist")
      setValue("")
    } else {
      const newTodo = { done: false, content: value }
      setTodos([...todos, newTodo])
      setPlaceholder("Add details")
      setValue("")
    }
  }

  return (
    <div className="flex justify-between gap-4">
      <input
        className="p-2 w-full rounded-xl border border-gray-cBDBDBD"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder={placeholder}
      />
      <button
        onClick={() => handleAdd(value)}
        className="p-2 w-2/6 rounded-xl text-white bg-blue-c2F80ED focus:outline-none"
      >
        Add
      </button>
    </div>
  )
}
