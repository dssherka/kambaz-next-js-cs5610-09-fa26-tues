"use client";

import { useState } from "react";
import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [text, setText] = useState("");

  return (
    <div id="wd-react-context-todo-list">
      <h2>Todo List (Context)</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        id="wd-add-todo-click"
        onClick={() => {
          addTodo(text);
          setText("");
        }}
      >
        Add
      </button>
      <button id="wd-clear-todo-click" onClick={() => setText("")}>
        Clear
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="text"
              value={todo.title}
              onChange={(e) => updateTodo(todo.id, e.target.value)}
            />
            <button
              id="wd-delete-todo-click"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
