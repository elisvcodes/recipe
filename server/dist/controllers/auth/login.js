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
const handleJwt_1 = require("../../util/handleJwt");
const passwords_1 = require("../../util/passwords");
const prismaClient_1 = __importDefault(require("../../util/prismaClient"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        if (!email || !password)
            throw Error("Missing fields");
        const user = yield prismaClient_1.default.user.findFirst({ where: { email: email } });
        if (!user)
            throw Error("No user found");
        const correctPassword = yield (0, passwords_1.comparePasswords)(password, user.password);
        if (!correctPassword)
            throw Error("Please check your creds");
        const token = (0, handleJwt_1.createToken)(user);
        res
            .status(200)
            .json({
            user: { id: user.id, email: user.email, name: user.name },
            token,
        });
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
exports.default = login;
//# sourceMappingURL=login.js.map