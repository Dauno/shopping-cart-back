import { Model, model, Schema } from 'mongoose';

import { IProduct } from './IProduct';

const productSchema: Schema = new Schema({
    id: Number,
    brand: String,
    image: String,
    price: Number,
    description: String,
});

export default model<Model<IProduct>>('products', productSchema);