import express from "express";
import createRecipe from "../controllers/recipe/createRecipe";
import getRecipes from "../controllers/recipe/getRecipes";
import protectedRoute from "../middleware/protectedRoute";
const router = express.Router();

router.post("/create", protectedRoute, createRecipe);
router.get("/all", protectedRoute, getRecipes);

export default router;
