import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../util/handleJwt";

const protectedRoute = (req: Request, res: Response, next: NextFunction) => {
  try {
    const bearer = req.headers.authorization;
    const [_, token] = bearer.split(" ");
    if (!token) throw Error("Not Authorized");

    const validToken = verifyToken(token);

    if (validToken === false) throw Error("Not Authorized");
    req.user = validToken.user;
  } catch (error) {
    res.status(400).json(error.message);
  }

  return next();
};

export default protectedRoute;
