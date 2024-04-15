import { Router } from "express";
import UserRoutes from "./users.routes.js";
import AuthRoutes from "./auth.routes.js";
import MyproductRoutes from "./my-products.routes.js";
import CategoryRoutes from "./categories.routes.js";

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
  {
    path: "/products",
    route: MyproductRoutes,
  },
  {
    path: "/categories",
    route: CategoryRoutes,
  },
];

moduleRoutes.forEach((route) => appRouter.use(route.path, route.route));

export default appRouter;
