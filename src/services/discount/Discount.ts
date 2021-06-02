import { Model, model, Schema } from 'mongoose';

import { IDiscount } from './IDiscount';

const discountSchema: Schema = new Schema({
    brand: String,
    discount: Number,
    threshold: Number,
});

export default model<Model<IDiscount>>('discounts', discountSchema);