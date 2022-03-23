import { Express } from "express";
import { UsersController } from "./users";
import { ContactsController } from "./contacts";
import { LoginController } from "./login";
import auth from "../middlewares/auth.middleware";

const routes = (app: Express): void => {
  app.use("/api/v1", auth, UsersController);
  app.use("/api/v1", auth, ContactsController);
  app.use("/", LoginController);
};

export default routes;
