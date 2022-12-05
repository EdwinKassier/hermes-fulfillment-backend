FROM node:13-alpine
RUN apk add g++ make python
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
COPY --chown=node:node . .
EXPOSE 8080
CMD node ./src/server.js
