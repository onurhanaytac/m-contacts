/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
require("dotenv").config();
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const auth = (req: Request, res: Response, next: NextFunction) => {
  const [, token] = req.headers.authorization?.split(" ") || "";
  if (!token) return res.sendStatus(401);

  jwt.verify(token, `${process.env.ACCESS_TOKEN_SECRET}`, (err, user) => {
    if (err) return res.sendStatus(401);

    (req as any).user = user;
  });

  next();
};

export default auth;
