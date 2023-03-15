import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

export const createToken = (user: User) => {
  return jwt.sign({ user: { id: user.id, email: user.email } }, "hello");
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, "hello");
};