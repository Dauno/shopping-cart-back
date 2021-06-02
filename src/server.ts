import * as dotenv from 'dotenv';

import App from './app';

dotenv.config();

async function runServer({ API_PORT = 0, MONGO_URL = '' }): Promise<void> {

   try {
      const app = new App();

      await app.mongoConnect(MONGO_URL);
      console.log('Mongodb connected');
      
      await app.expressListen(Number(API_PORT));
      console.log(`Express listening on port ${API_PORT}`);

   } catch (error) {
      console.log('Run server error', error);
   }
}


runServer(process.env);