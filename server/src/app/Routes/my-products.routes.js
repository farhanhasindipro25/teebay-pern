import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getProducts,
} from "../Controllers/my-products.controller.js";

const MyproductRoutes = Router();

MyproductRoutes.post("/create-product", createProduct);
MyproductRoutes.get("/", getProducts);
MyproductRoutes.patch("/:id", editProduct);
MyproductRoutes.delete("/:id", deleteProduct);

export default MyproductRoutes;
