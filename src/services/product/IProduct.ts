import { Document } from 'mongoose';

export interface IProduct extends Document {
    id: number,
    brand: string,
    image: string,
    price: number,
    description: string,
};
