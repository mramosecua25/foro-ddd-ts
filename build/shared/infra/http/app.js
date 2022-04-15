"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const api_1 = require("./api/api");
const origin = {
    origin: '*'
};
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)(origin));
app.use('/api/v1', api_1.router);
const port = 5000;
app.listen(port, () => {
    console.log(`[Server]: running on port ${port}`);
});
//# sourceMappingURL=app.js.map