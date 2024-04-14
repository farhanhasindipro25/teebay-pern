import { Router } from "express";
import { loginUser } from "../Controllers/auth.controller.js";

const AuthRoutes = Router();

AuthRoutes.post("/login", loginUser);

export default AuthRoutes;
