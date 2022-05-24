FROM node:14

WORKDIR /index

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]