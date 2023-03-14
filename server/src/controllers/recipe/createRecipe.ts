import { Request, Response } from "express";
import prismaClient from "../../util/prismaClient";

const createRecipe = async (req: Request, res: Response) => {
  const recipe = await prismaClient.recipe.create({
    data: {
      name: "",
      userId: "",
    },
  });
};

export default createRecipe;
