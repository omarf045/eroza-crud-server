import { Sequelize } from "sequelize";

const db = new Sequelize("listadecompras", "root", "toor", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
