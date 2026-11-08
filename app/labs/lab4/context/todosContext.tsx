import {createContext, useContext, useState, type ReactNode} from "react";

type Todo = {
    id : number;
    title: string;
};

type TodosContextValue ={
    todos: Todo[];
    addTodo:(title:string) => void;
    updateTodo:(id:number, title:string) => void;
    deleteTodo:(id:number) => void;
}

const TodosContext = createContext<TodosContextValue | null>(null);

export function TodosProvider({children}: {children: ReactNode}){
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, title: "Learn React Context" },
        { id: 2, title: "Build the todo list" },
    ]);

    const addTodo = (title:string) => {
        const newTodo: Todo = { id: Date.now(), title };
        setTodos([...todos, newTodo]);
    };

    const updateTodo = (id:number, title:string) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, title } : todo));
    };

    const deleteTodo = (id:number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <TodosContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
            {children}
        </TodosContext.Provider>
    );
}

export function useTodosContext() {
    const value = useContext(TodosContext);
    if (!value) {
        throw new Error("useTodosContext must be used within a TodosProvider");
    }
    return value;
}