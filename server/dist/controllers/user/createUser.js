"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passwords_1 = require("../../util/passwords");
const prismaClient_1 = __importDefault(require("../../util/prismaClient"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !email)
            throw Error("Missing fields");
        const user = yield prismaClient_1.default.user.create({
            data: {
                name: name,
                email: email,
                password: yield (0, passwords_1.hashPassword)(password),
            },
        });
        res.status(200).json({ message: "success", user });
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
});
exports.default = createUser;
//# sourceMappingURL=createUser.js.map