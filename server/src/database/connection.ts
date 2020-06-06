import knex from 'knex'

const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        charset: process.env.DB_CHARSET,
    },
    migrations: {
        tableName: 'migrations'
    },
    useNullAsDefault: true
})

export default connection