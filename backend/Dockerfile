# Linux distribution running Node.js version 10
FROM node:10-alpine

# Working directory of the container
WORKDIR /usr/src/weatherapp_backend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install packages
RUN npm install

# Copy everything from the current directory to the  working directory of the container
COPY . .

# Expose the port 9000
EXPOSE 9000

# Start the application
CMD [ "npm", "start" ]