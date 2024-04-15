import { Router } from "express";
import { PurchasesController } from "./purchases.controller.js";

const PurchaseRoutes = Router();

PurchaseRoutes.post("/:id/buy", PurchasesController.createPurchase);
PurchaseRoutes.get("/", PurchasesController.getPurchases);
export default PurchaseRoutes;
