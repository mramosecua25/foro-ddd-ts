"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
router.get('/', (req, res) => {
    // const data = req
    console.log('test');
    return res.json({ message: 'Hello you are up' });
});
//# sourceMappingURL=api.js.map