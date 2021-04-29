FROM node:15.8.0-alpine3.10
WORKDIR /usr/src/app
COPY package*.json ./
ADD package.json /usr/src/app/package.json
COPY . .
EXPOSE 3000
CMD ["npm ","start"];

