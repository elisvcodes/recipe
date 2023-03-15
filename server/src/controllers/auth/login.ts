import { Request, Response } from "express";
import { createToken } from "../../util/handleJwt";
import { comparePasswords } from "../../util/passwords";
import prismaClient from "../../util/prismaClient";

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) throw Error("Missing fields");

    const user = await prismaClient.user.findFirst({ where: { email: email } });

    if (!user) throw Error("No user found");

    const correctPassword = await comparePasswords(password, user.password);

    if (!correctPassword) throw Error("Please check your creds");

    const token = createToken(user);

    res
      .status(200)
      .json({
        user: { id: user.id, email: user.email, name: user.name },
        token,
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export default login;
