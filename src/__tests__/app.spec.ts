import supertest from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';


import App from '../app';

/* models */
import Discount from '../services/discount';

const DISCOUNT = {
  _id: '5d2f3e139c66136f62dafb47',
  brand: 'Marca1',
  threshold: 120000,
  discount: 8000
};

const PRODUCT = {
  _id: '5d2f88d540ae9d7f94e5ad3b',
  id: 1,
  brand: "Marca1",
  description: "Televisión 54''",
  image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
  price: 80000
};

async function seedingData(db: any) {
  await db.models.discounts(DISCOUNT).save();

  await db.models.products(PRODUCT).save();
}

describe('shopping-cart-back', () => {
  let db: any;
  let app: any;
  let mongod: any;


  beforeAll(async () => {

    app = new App();

    /* mongo server */
    mongod = new MongoMemoryServer();
    const uri = await mongod.getUri();

    /* mongoose */
    db = await app.mongoConnect(uri);

    // create collection
    await Discount.createCollection();

    // seeding Data
    await seedingData(db);
  });

  afterAll(async () => {
    await db.disconnect();
    await mongod.stop();
  });

  describe('discount', () => {
    test('all', async () => {
      const response = await supertest(app.express).get('/api/discount');
      expect(response.body).toStrictEqual([{...DISCOUNT, __v: 0}]);
    });
  });

  describe('product', () => {
    test('all', async () => {
      const response = await supertest(app.express).get('/api/product');
      expect(response.body).toStrictEqual([{...PRODUCT, __v: 0}]);
    });
  });

});
