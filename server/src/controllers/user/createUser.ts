import { NextFunction, Request, Response } from "express";
import { hashPassword } from "../../util/passwords";
import prismaClient from "../../util/prismaClient";

const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !email) throw Error("Missing fields");

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: await hashPassword(password),
      },
    });
    res.status(200).json({ message: "success", user });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

export default createUser;
