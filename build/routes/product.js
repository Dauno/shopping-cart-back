"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = __importDefault(require("../controllers/product"));
var ProductRouter = /** @class */ (function () {
    function ProductRouter() {
        this.productController = new product_1.default();
    }
    ProductRouter.prototype.cors = function (req, res, next) {
        res.set('Access-Control-Allow-Origin', '*');
        next();
    };
    ProductRouter.prototype.route = function (express) {
        express.get('/api/product', this.cors, this.productController.getAll);
    };
    return ProductRouter;
}());
exports.default = ProductRouter;
