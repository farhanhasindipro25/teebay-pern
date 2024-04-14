import { Router } from "express";
import { createUser } from "../Controllers/users.controller";

const UserRoutes = Router();

UserRoutes.post("/create-user", createUser);

export default UserRoutes;
