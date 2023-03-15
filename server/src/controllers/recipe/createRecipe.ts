import { Request, Response } from "express";
import prismaClient from "../../util/prismaClient";

const createRecipe = async (req: Request, res: Response) => {
  const { name } = req.body;
  const user = req.user;
  try {
    await prismaClient.recipe.create({
      data: {
        name: name,
        userId: user.id,
      },
    });

    res.status(200).json("success");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export default createRecipe;
