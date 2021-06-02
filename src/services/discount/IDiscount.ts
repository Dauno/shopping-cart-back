import { Document } from 'mongoose';

export interface IDiscount extends Document {
    brand: string,
    discount: number,
    threshold: number,
};
