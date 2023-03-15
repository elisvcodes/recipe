import { Request, Response } from "express";
import prismaClient from "../../util/prismaClient";

const getRecipes = async (req: Request, res: Response) => {
  console.log(req.user);
  try {
    const recipes = await prismaClient.recipe.findMany();

    res.status(200).json(recipes);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export default getRecipes;
