import MyTodo from '../models/TodoModel'
import Todo from '../domain/Todo'


export const getAllTodos = async (): Promise<{ todos: MyTodo[]; message: string }> => {
    try {
        const todos = await MyTodo.getAllTodos();
        return { todos, message: 'Todos fetched successfully' };
    }
    catch (error) {
        throw error;
    }

}

export const createTodo = async (newtodo: Todo[]): Promise<{ todo: MyTodo[]; message: string }> => {

    try {
        const todo = await MyTodo.createTodo(newtodo);
        return { todo, message: 'Todo created successfully' };
    }
    catch (error) {
        throw error;
    }

}

export const getTodoById = async (id: number): Promise<{ todo: any; message: string }> => {
    try {
        const todo = await MyTodo.getTodoById(id);
        return { todo, message: 'Todo fetched successfully' };
    }
    catch (error) {
        throw error;
    }
}

export const updateTodo = async (id: number, updatedTodo: any): Promise<{ todo: any; message: string }> => {
    try {
        const todo = await MyTodo.updateTodo(id, updatedTodo);
        return { todo, message: 'Todo updated successfully' };
    }
    catch (error) {
        throw error;
    }
}

export const deleteTodo = async (id: number): Promise<{ message: string }> => {
    try {
        await MyTodo.deleteTodo(id);
        return { message: 'Todo deleted successfully' };
    }
    catch (error) {
        throw error;
    }

}

