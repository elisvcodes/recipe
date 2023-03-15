"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createRecipe_1 = __importDefault(require("../controllers/recipe/createRecipe"));
const getRecipes_1 = __importDefault(require("../controllers/recipe/getRecipes"));
const protectedRoute_1 = __importDefault(require("../middleware/protectedRoute"));
const router = express_1.default.Router();
router.post("/create", protectedRoute_1.default, createRecipe_1.default);
router.get("/all", protectedRoute_1.default, getRecipes_1.default);
exports.default = router;
//# sourceMappingURL=recipe.js.map