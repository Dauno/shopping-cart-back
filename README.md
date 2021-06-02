## Firts
follow the instructions the instruction from this repo
https://github.com/walmartdigital/brand-discounts-db


## Install

```bash
git clone https://github.com/Dauno/shopping-cart-back.git
$ cd /shopping-cart-back
$ npm i
```


## Environment vars:
```bash
MONGO_URL
API_PORT
```

## Run

http://localhost:3001/api/product

http://localhost:3001/api/discount



local:

change environment -> .env

```bash
$ npm run start
```

docker:

change environment -> process.json

```bash
$ docker-compose up --build
```

## Test
```bash
$ npm run test
```