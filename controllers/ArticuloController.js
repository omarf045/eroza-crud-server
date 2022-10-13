//importamos el Modelo
import ArticuloModel from "../models/ArticuloModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllArticulos = async (req, res) => {
  try {
    const articulos = await ArticuloModel.findAll();
    res.json(articulos);
  } catch (error) {
    res.json({ message: error.message });
  }
};
//Mostrar un registro
export const getArticulo = async (req, res) => {
  try {
    const articulo = await ArticuloModel.findAll({
      where: { id: req.params.id },
    });
    res.json(articulo[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
//Crear un registro
export const createArticulo = async (req, res) => {
  try {
    await ArticuloModel.create(req.body);
    res.json({
      message: "¡Registro creado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//Actualizar un registro
export const updateArticulo = async (req, res) => {
  try {
    await ArticuloModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Registro actualizado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
//Eliminar un registro
export const deleteArticulo = async (req, res) => {
  try {
    await ArticuloModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Registro eliminado correctamente!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
