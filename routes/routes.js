import express from "express";
import {
  getAllArticulos,
  getArticulo,
  createArticulo,
  updateArticulo,
  deleteArticulo,
} from "../controllers/ArticuloController.js";
const router = express.Router();

router.get("/", getAllArticulos);
router.get("/:id", getArticulo);
router.post("/", createArticulo);
router.put("/:id", updateArticulo);
router.delete("/:id", deleteArticulo);

export default router;
