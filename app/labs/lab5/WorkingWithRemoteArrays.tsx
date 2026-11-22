"use client";

import { useState } from "react";
import { input, linkButton, sectionTitle, subTitle } from "./styles";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithRemoteArrays() {
  const API = `${HTTP_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    completed: false,
  });
  return (
    <div id="wd-working-with-remote-arrays">
      <h3 className={sectionTitle}>Working with Arrays</h3>

      <h4 className={subTitle}>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className={linkButton} href={API}>
        Get Todos
      </a>

      <h4 className={subTitle}>Retrieving an Item from an Array by ID</h4>
      <div className="flex items-center gap-2">
        <a
          id="wd-retrieve-todo-by-id"
          className={linkButton}
          href={`${API}/${todo.id}`}
        >
          Get Todo by ID
        </a>
        <input
          id="wd-todo-id"
          className={input}
          value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        />
      </div>

      <h4 className={subTitle}>Filtering Array Items</h4>
      <a
        id="wd-retrieve-completed-todos"
        className={linkButton}
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>

      <h4 className={subTitle}>Creating new Items in an Array</h4>
      <a id="wd-create-todo" className={linkButton} href={`${API}/create`}>
        Create Todo
      </a>

      <h4 className={subTitle}>Removing from an Array</h4>
      <a id="wd-remove-todo" className={linkButton} href={`${API}/${todo.id}/delete`}>
        Remove Todo with ID = {todo.id}
      </a>

      <h4 className={subTitle}>Updating an Item in an Array</h4>
      <div className="mb-2 flex items-center gap-2">
        <a
          id="wd-update-todo-title"
          className={linkButton}
          href={`${API}/${todo.id}/title/${todo.title}`}
        >
          Update Todo
        </a>
        <input
          className={input}
          value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        />
        <input
          id="wd-todo-title"
          className={input}
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
      </div>
      <div className="mb-2 flex items-center gap-2">
        <a
          id="wd-update-todo-completed"
          className={linkButton}
          href={`${API}/${todo.id}/completed/${todo.completed}`}
        >
          Complete Todo ID = {todo.id}
        </a>
        <input
          id="wd-todo-completed"
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
        />
      </div>
      <div className="mb-2 flex items-center gap-2">
        <a
          id="wd-update-todo-description"
          className={linkButton}
          href={`${API}/${todo.id}/description/${todo.description}`}
        >
          Describe Todo ID = {todo.id}
        </a>
        <input
          id="wd-todo-description"
          className={input}
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
      </div>
      <hr className="my-4" />
    </div>
  );
}
