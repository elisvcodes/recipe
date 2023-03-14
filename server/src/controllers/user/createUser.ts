import { Request, Response } from "express";
import { hashPassword } from "../../util/passwords";
import prismaClient from "../../util/prismaClient";

const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: await hashPassword(password),
      },
    });
    res.status(200).json("success");
  } catch (error) {
    res.status(400).json(error);
  }
};

export default createUser;
