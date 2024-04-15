import { Router } from "express";
import {
  createProduct,
  getProducts,
} from "../Controllers/my-products.controller.js";

const MyproductRoutes = Router();

MyproductRoutes.post("/create-product", createProduct);
MyproductRoutes.get("/", getProducts);

export default MyproductRoutes;
