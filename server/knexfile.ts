import path from 'path'
require('dotenv/config')

module.exports = {
    development: {
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            charset: process.env.DB_CHARSET,
        },
        migrations: {
            directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
        },
        seeds: {
            directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
        },
    },
//     staging: {
//         client: "postgresql",
//         connection: {
//             database: "my_db",
//             user: "username",
//             password: "password"
//         },
//         pool: {
//             min: 2,
//             max: 10
//         },
//         migrations: {
//             tableName: "migrations"
//         }
//     },
//   production: {
//     client: "postgresql",
//     connection: {
//       database: "my_db",
//       user: "username",
//       password: "password"
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: "knex_migrations"
//     }
//   }
};