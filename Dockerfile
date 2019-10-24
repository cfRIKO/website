FROM node:10

WORKDIR /usr/src/website

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]