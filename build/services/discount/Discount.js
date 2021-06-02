"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var discountSchema = new mongoose_1.Schema({
    brand: String,
    discount: Number,
    threshold: Number,
});
exports.default = mongoose_1.model('discounts', discountSchema);
