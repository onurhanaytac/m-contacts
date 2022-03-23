/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, Router } from "express";

import UsersDAL from "./users.dal";
import UsersService from "./users.service";

const router = Router();
const usersService = new UsersService(new UsersDAL());

router.get("/users", async (req: Request, res: Response) => {
  const { error, data }: any = await usersService.getUsers();

  if (error) {
    return res.status(500).send(error);
  }

  res.status(200).send({ success: true, data });
});

router.get("/user/:id", async (req: Request, res: Response) => {
  const { error, data }: any = await usersService.getUserById(req.params);

  if (error) {
    return res.status(500).send(error);
  }

  res.status(200).send({ success: true, data });
});

router.post("/user", async (req: Request, res: Response) => {
  const { error, data }: any = await usersService.createUser(req.body);

  if (error) {
    return res.status(500).send(error);
  }

  res.status(200).send({ success: true, data });
});

router.put("/user", async (req: Request, res: Response) => {
  const { error, data }: any = await usersService.updateUser(req.body);

  if (error) {
    return res.status(500).send(error);
  }

  res.status(200).send({ success: true, data });
});

router.delete("/user/:id", async (req: Request, res: Response) => {
  const { error, data }: any = await usersService.deleteUserById(req.params);

  if (error) {
    return res.status(500).send(error);
  }

  res.status(200).send({ success: true, data });
});

router.get("/userWithContacts/:id", async (req: Request, res: Response) => {
  const { error, data }: any = await usersService.getUserWithContacts(
    req.params
  );

  if (error) {
    return res.status(500).send(error);
  }

  res.status(200).send({ success: true, data });
});

export default router;
