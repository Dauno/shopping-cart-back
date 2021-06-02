import { Application, Request, Response } from 'express';
import ProductController from '../controllers/product';

class ProductRouter {

    private productController: ProductController;

    constructor() {
        this.productController = new ProductController();
    }

    private cors(req: Request, res: Response, next: Function): void {
        res.set('Access-Control-Allow-Origin', '*');
        next();
    }

    public route(express: Application) {
        
        express.get('/api/product', this.cors, this.productController.getAll);

    }
}

export default ProductRouter;