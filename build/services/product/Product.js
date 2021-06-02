"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var productSchema = new mongoose_1.Schema({
    id: Number,
    brand: String,
    image: String,
    price: Number,
    description: String,
});
exports.default = mongoose_1.model('products', productSchema);
