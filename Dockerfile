# pull official base image
FROM node:lts-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]






# # base image
# FROM node:latest

# # set working directory
# WORKDIR /usr/src/app

# # install and cache app dependencies
# COPY package*.json ./
# ADD package.json /usr/src/app/package.json
# RUN npm install
# RUN npm install react-scripts@1.1.0 -g

# # Bundle app source
# COPY . .

# EXPOSE 3000

# # start app
# CMD ["npm", "start"]



# FROM node:lts-alpine
# WORKDIR /app
# ADD package*.json .
# RUN npm install
# ADD . .
# CMD ["npm", "start"]

