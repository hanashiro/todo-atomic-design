# Base image
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy the package.json and yarn.lock files
COPY package*.json ./

# Install app dependencies
RUN npm install 

# Bundle app source
COPY . .

EXPOSE 3000

# Starts the app in development mode
ENTRYPOINT [ "npm", "run" ] 
CMD ["dev"]