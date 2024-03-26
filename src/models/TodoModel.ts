import knex from "../db/knex";

class Todo {
    public static table = "todos";

    public static async getAllTodos() {
        const todos = await knex(this.table).select();
        return todos;
    }
    public static async createTodo(todo: Todo[]) {
        const todos = await knex(this.table).insert(todo);
        return todos;
    }
    public static async getTodoById(id: number) {
        const todos = await knex(this.table).where({ id }).select();
        return todos;
    }

    public static async updateTodo(id: number, updatedTodo: any) {
        const todos = await knex(this.table).where({ id }).update(updatedTodo);
        return todos;
    }

    public static async deleteTodo(id: number) {
        const todos = await knex(this.table).where({ id }).del();
        return todos;
    }

}
export default Todo;