"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createUser_1 = __importDefault(require("../controllers/user/createUser"));
const router = express_1.default.Router();
router.post("/create", createUser_1.default);
exports.default = router;
//# sourceMappingURL=user.js.map