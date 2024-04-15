import { Router } from "express";
import { ProductsController } from "./products.controller.js";

const ProductRoutes = Router();

ProductRoutes.post("/create-product", ProductsController.createProduct);
ProductRoutes.get("/", ProductsController.getProducts);
ProductRoutes.patch("/:id", ProductsController.editProduct);
ProductRoutes.delete("/:id", ProductsController.deleteProduct);

export default ProductRoutes;
