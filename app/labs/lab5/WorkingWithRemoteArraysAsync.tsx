"use client";

import { useEffect, useState } from "react";
import { FaPencilAlt, FaPlusCircle, FaTrash } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";
import { sectionTitle } from "./styles";

type Todo = client.Todo;

const messageFrom = (error: unknown) => {
  const e = error as { response?: { data?: { message?: string } }; message?: string };
  return e.response?.data?.message ?? e.message ?? "Request failed";
};

export default function WorkingWithRemoteArraysAsynchronously() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchTodos = async () => {
    try {
      setTodos(await client.fetchTodos());
    } catch (error) {
      setErrorMessage(messageFrom(error));
    }
  };
  const removeTodo = async (todo: Todo) => {
    try {
      setTodos(await client.removeTodo(todo));
    } catch (error) {
      setErrorMessage(messageFrom(error));
    }
  };
  const createNewTodo = async () => {
    try {
      setTodos(await client.createNewTodo());
    } catch (error) {
      setErrorMessage(messageFrom(error));
    }
  };
  const postNewTodo = async () => {
    try {
      const newTodo = await client.postNewTodo({
        title: "New Posted Todo",
        completed: false,
      });
      setTodos([...todos, newTodo]);
    } catch (error) {
      setErrorMessage(messageFrom(error));
    }
  };
  const deleteTodo = async (todo: Todo) => {
    try {
      await client.deleteTodo(todo);
      setTodos(todos.filter((t) => t.id !== todo.id));
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(messageFrom(error));
    }
  };
  const editTodo = (todo: Todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t)));
  };
  const updateTodo = async (todo: Todo) => {
    try {
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(messageFrom(error));
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- fetch on load, as in §5.2.5.6
    fetchTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3 className={sectionTitle}>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <p
          id="wd-todo-error-message"
          className="my-2 rounded bg-red-100 px-3 py-2 text-red-800"
        >
          {errorMessage}
        </p>
      )}
      <h4 className="mt-3 mb-2 flex items-center gap-2 text-lg font-semibold">
        Todos
        <FaPlusCircle
          onClick={createNewTodo}
          id="wd-create-todo"
          className="cursor-pointer text-green-600"
          title="Create todo (GET)"
        />
        <FaPlusCircle
          onClick={postNewTodo}
          id="wd-post-todo"
          className="cursor-pointer text-blue-600"
          title="Post todo (POST)"
        />
      </h4>
      <ul className="max-w-xl divide-y divide-neutral-200 rounded border border-neutral-300">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2 px-3 py-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })}
            />
            {todo.editing ? (
              <input
                className="flex-1 rounded border border-neutral-300 px-2 py-1 text-sm"
                defaultValue={todo.title}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({
                      ...todo,
                      title: (e.target as HTMLInputElement).value,
                      editing: false,
                    });
                  }
                }}
              />
            ) : (
              <span className={`flex-1 ${todo.completed ? "line-through" : ""}`}>
                {todo.title}
              </span>
            )}
            <FaPencilAlt
              onClick={() => editTodo(todo)}
              className="cursor-pointer text-blue-600"
              title="Edit"
            />
            <TiDelete
              onClick={() => deleteTodo(todo)}
              id="wd-delete-todo"
              className="cursor-pointer text-2xl text-red-600"
              title="Delete (HTTP DELETE)"
            />
            <FaTrash
              onClick={() => removeTodo(todo)}
              id="wd-remove-todo"
              className="cursor-pointer text-red-600"
              title="Remove (GET)"
            />
          </li>
        ))}
      </ul>
      <hr className="my-4" />
    </div>
  );
}
