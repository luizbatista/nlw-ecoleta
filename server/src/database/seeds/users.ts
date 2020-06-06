import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
    return knex('users').insert([
        { id: 1, name: "Luiz Carlos", email: 'luiz.carlos@email.com' },
        { id: 2, name: "Felipe Novais", email: 'felipe.novais@email.com' },
        { id: 3, name: "Henrique Júnior", email: 'henrique.junior@email.com' },
        { id: 4, name: "Pedro Paulo", email: 'pedro.paulo@email.com' },
    ]);
};