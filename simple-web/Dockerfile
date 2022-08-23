# Specify a base image
FROM node:alpine

WORKDIR /usr/app

# Install some dependencies
COPY ./ ./
RUN npm install

# Default command
CMD [ "npm", "start" ]