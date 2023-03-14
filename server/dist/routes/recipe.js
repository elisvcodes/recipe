"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createRecipe_1 = __importDefault(require("../controllers/recipe/createRecipe"));
const router = express_1.default.Router();
router.post("/create", createRecipe_1.default);
exports.default = router;
//# sourceMappingURL=recipe.js.map