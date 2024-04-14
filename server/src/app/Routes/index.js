import { Router } from "express";
import UserRoutes from "./users.routes.js";
import AuthRoutes from "./auth.routes.js";

const appRouter = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
];

moduleRoutes.forEach((route) => appRouter.use(route.path, route.route));

export default appRouter;
