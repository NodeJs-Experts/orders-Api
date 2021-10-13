module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "database": "./src/shared/infra/typeorm/database.sqlite",
  "migrations": ["./src/shared/infra/typeorm/migrations/*.ts"],
  "entities": ["./src/modules/**/entities/*.ts"],
  "cli": {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  }
}



