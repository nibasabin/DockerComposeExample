FROM node:latest
WORKDIR /backendService
COPY ./package.json .
RUN npm install
COPY . .

CMD [ "node", "server.js"]