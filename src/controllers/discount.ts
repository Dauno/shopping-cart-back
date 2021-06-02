import { Request, Response } from 'express';

import Discount from '../services/discount';


class DiscountController {


    async getAll(req: Request, res: Response) {
        try {
            const discount = await Discount.find({});
            res.status(200).json(discount);
        } catch (error) {
            console.log(error);
            res.status(500).json([]);
        }
    }
}


export default DiscountController;