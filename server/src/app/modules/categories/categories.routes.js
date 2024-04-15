import { Router } from "express";
import { CategoriesController } from "./categories.controller.js";

const CategoryRoutes = Router();

CategoryRoutes.post("/create-category", CategoriesController.createCategory);
CategoryRoutes.get("/", CategoriesController.getCategories);

export default CategoryRoutes;
