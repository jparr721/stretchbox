FROM node:latest
LABEL Jarred Parr <jparr721@gmail.com>

RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server
COPY ./package*.json ./

RUN npm i -only=production
COPY . /usr/src/server

EXPOSE 3000

CMD ["npm", "start"]