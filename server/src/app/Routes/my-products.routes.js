import { Router } from "express";
import {
  createProduct,
  editProduct,
  getProducts,
} from "../Controllers/my-products.controller.js";

const MyproductRoutes = Router();

MyproductRoutes.post("/create-product", createProduct);
MyproductRoutes.get("/", getProducts);
MyproductRoutes.patch("/:id", editProduct);

export default MyproductRoutes;
