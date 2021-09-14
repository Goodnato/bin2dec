export default {
    "type": "mysql",
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.NODE_ENV !== "test" ? process.env.DB_NAME : process.env.DB_NAME + `_test`,
    "migrations": [
        "./src/database/migrations/**.ts"
    ],
    "entities": [
        "./src/entities/**.ts"
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
}