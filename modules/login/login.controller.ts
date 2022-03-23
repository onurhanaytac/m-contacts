/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
require("dotenv").config();
import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import UsersDAL from "../users/users.dal";
import UsersService from "../users/users.service";

const router = Router();
const usersService = new UsersService(new UsersDAL());

router.post("/login", async (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;

  const { error, data }: any = await usersService.getUserByEmailAndPassword({
    email,
    password
  });

  if (error || !data) {
    return res.status(401).send();
  }

  const accessToken = jwt.sign(
    { email: data.email },
    `${process.env.ACCESS_TOKEN_SECRET}`
  );

  res.json({ accessToken });
});

export default router;
