import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('coaches', table => {
        table.increments('id').primary()
        table.integer('userId').unsigned().notNullable()
        table.foreign('userId').references('id').inTable('users')
        table.timestamps(true, true)
    })
}

export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('coaches')
}