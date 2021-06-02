import { Request, Response } from 'express';

import Product from '../services/product';


class ProductController {

    async getAll(req: Request, res: Response) {
        try {
            const products = await Product.find({});
            res.status(200).json(products);
        } catch (error) {
            console.log(error);
            res.status(500).json([]);
        }
    }
}


export default ProductController;