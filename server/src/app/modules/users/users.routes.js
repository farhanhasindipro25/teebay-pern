import { Router } from "express";
import { UsersController } from "./users.controller.js";

const UserRoutes = Router();

UserRoutes.post("/create-user", UsersController.createUser);

export default UserRoutes;
