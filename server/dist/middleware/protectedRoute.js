"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleJwt_1 = require("../util/handleJwt");
const protectedRoute = (req, res, next) => {
    try {
        const bearer = req.headers.authorization;
        const [_, token] = bearer.split(" ");
        if (!token)
            throw Error("Not Authorized");
        const validToken = (0, handleJwt_1.verifyToken)(token);
        if (validToken === false)
            throw Error("Not Authorized");
        req.user = validToken.user;
    }
    catch (error) {
        res.status(400).json(error.message);
    }
    return next();
};
exports.default = protectedRoute;
//# sourceMappingURL=protectedRoute.js.map