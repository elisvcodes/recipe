import express from "express";
import createRecipe from "../controllers/recipe/createRecipe";
const router = express.Router();

router.post("/create", createRecipe);

export default router;
