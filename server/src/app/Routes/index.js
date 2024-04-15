import { Router } from "express";
import AuthRoutes from "../modules/auth/auth.routes.js";
import UserRoutes from "../modules/users/users.routes.js";
import CategoryRoutes from "../modules/categories/categories.routes.js";
import ProductRoutes from "../modules/products/products.routes.js";

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
    route: ProductRoutes,
  },
  {
    path: "/categories",
    route: CategoryRoutes,
  },
];

moduleRoutes.forEach((route) => appRouter.use(route.path, route.route));

export default appRouter;
