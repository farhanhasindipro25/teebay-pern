import { Router } from "express";
import { createCategory } from "../Controllers/categories.controller.js";

const CategoryRoutes = Router();

CategoryRoutes.post("/create-category", createCategory);

export default CategoryRoutes;
