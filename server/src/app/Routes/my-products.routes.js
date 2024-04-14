import { Router } from "express";
import { createProduct } from "../Controllers/my-products.controller.js";

const MyproductRoutes = Router();

MyproductRoutes.post("/create-product", createProduct);

export default MyproductRoutes;
