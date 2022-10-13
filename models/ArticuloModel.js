//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const ArticuloModel = db.define("articulos", {
  nombre: { type: DataTypes.STRING },
  precio: { type: DataTypes.STRING },
});

export default ArticuloModel;
