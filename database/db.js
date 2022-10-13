import { Sequelize } from "sequelize";

import { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT } from "../config";

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});

export default db;
