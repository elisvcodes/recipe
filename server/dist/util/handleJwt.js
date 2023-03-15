"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createToken = (user) => {
    return jsonwebtoken_1.default.sign({ user: { id: user.id, email: user.email } }, "hello", {
        expiresIn: "2h",
    });
};
exports.createToken = createToken;
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, "hello");
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=handleJwt.js.map