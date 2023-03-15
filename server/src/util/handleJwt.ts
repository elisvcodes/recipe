import { User } from "@prisma/client";
import jwt, { JwtPayload } from "jsonwebtoken";

export const createToken = (user: User) => {
  return jwt.sign({ user: { id: user.id, email: user.email } }, "hello", {
    expiresIn: "2h",
  });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, "hello", (err, decodedToken) => {
    if (err) {
      return false;
    } else {
      return decodedToken;
    }
  });
};
