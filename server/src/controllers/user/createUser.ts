import { Request, Response } from "express";
import { hashPassword } from "../../util/passwords";
import prismaClient from "../../util/prismaClient";

const createUser = async (req: Request, res: Response) => {
  const user = await prismaClient.user.create({
    data: {
      name: "",
      email: "",
      password: await hashPassword(""),
    },
  });
};
