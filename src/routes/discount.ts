import { Application, Request, Response } from 'express';
import DiscountController from '../controllers/discount';

class DiscountRouter {

    private discountController: DiscountController;

    constructor() {
        this.discountController = new DiscountController();
    }

    private cors(req: Request, res: Response, next: Function): void {
        res.set('Access-Control-Allow-Origin', '*');
        next();
    }

    public route(express: Application) {
        
        express.get('/api/discount', this.cors, this.discountController.getAll);

    }
}

export default DiscountRouter;