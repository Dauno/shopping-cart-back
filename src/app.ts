import express from 'express';
import mongoose from 'mongoose';

import ProductRouter from './routes/product';
import DiscountRouter from './routes/discount';

class App {
   public express: express.Application;
   private productRouter: ProductRouter;
   private discountRouter: DiscountRouter;

   constructor() {
      this.express = express();
      this.productRouter = new ProductRouter();
      this.productRouter.route(this.express);
      this.discountRouter = new DiscountRouter();
      this.discountRouter.route(this.express);
   }

   mongoConnect(mongoUrl: string): Promise<any> {
      return new Promise(( resolve, reject ) => {
         mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
         })
         .then(resolve)
         .catch(reject);
      });
   }

   expressListen(port: number): Promise<void> {
      return new Promise(( resolve, reject ) => {
         this.express.listen(port, resolve).on('error', reject);
      });
   }

}
export default App;