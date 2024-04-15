import { Router } from "express";

import { RentController } from "./rents.controller.js";

const RentRoutes = Router();

RentRoutes.post("/:id/rent", RentController.createRent);

export default RentRoutes;
