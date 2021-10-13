module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "ssl": true, 
  "extra": { "ssl": { "rejectUnauthorized": false }},
  "database": `${process.env.PATH_ENV}/shared/infra/typeorm/database.sqlite`,
  "migrations": [`${process.env.PATH_ENV}/shared/infra/typeorm/migrations/*.ts`],
  "entities": [`${process.env.PATH_ENV}/modules/**/entities/*.ts`],
  "cli": {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  }
}




