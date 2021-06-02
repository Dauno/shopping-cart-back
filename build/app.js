"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var product_1 = __importDefault(require("./routes/product"));
var discount_1 = __importDefault(require("./routes/discount"));
var App = /** @class */ (function () {
    function App() {
        this.express = express_1.default();
        this.productRouter = new product_1.default();
        this.productRouter.route(this.express);
        this.discountRouter = new discount_1.default();
        this.discountRouter.route(this.express);
    }
    App.prototype.mongoConnect = function (mongoUrl) {
        return new Promise(function (resolve, reject) {
            mongoose_1.default.connect(mongoUrl, {
                useNewUrlParser: true,
                useFindAndModify: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            })
                .then(resolve)
                .catch(reject);
        });
    };
    App.prototype.expressListen = function (port) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.express.listen(port, resolve).on('error', reject);
        });
    };
    return App;
}());
exports.default = App;
