"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discount_1 = __importDefault(require("../controllers/discount"));
var DiscountRouter = /** @class */ (function () {
    function DiscountRouter() {
        this.discountController = new discount_1.default();
    }
    DiscountRouter.prototype.cors = function (req, res, next) {
        res.set('Access-Control-Allow-Origin', '*');
        next();
    };
    DiscountRouter.prototype.route = function (express) {
        express.get('/api/discount', this.cors, this.discountController.getAll);
    };
    return DiscountRouter;
}());
exports.default = DiscountRouter;
