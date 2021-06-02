FROM node:13.12.0-alpine as build
WORKDIR /usr/src/app
COPY package.json ./
COPY . .
RUN npm install
RUN npm run build

FROM node:12.17.0-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY process.json ./
RUN npm install --silent
RUN npm install pm2 -g --silent
COPY --from=build /usr/src/app/build ./build
CMD [ "pm2-runtime", "start", "process.json" ]

