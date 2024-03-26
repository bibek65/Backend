import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('todos', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.boolean('is_completed').notNullable();
    });

}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('todos');
}

