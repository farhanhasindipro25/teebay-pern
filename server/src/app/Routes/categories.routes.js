import { Router } from "express";
import {
  createCategory,
  getCategories,
} from "../Controllers/categories.controller.js";

const CategoryRoutes = Router();

CategoryRoutes.post("/create-category", createCategory);
CategoryRoutes.get("/", getCategories);

export default CategoryRoutes;
