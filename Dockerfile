FROM node:16.20.1

# Use build arguments
ARG MONGODB_URI
ARG PORT

# Set environment variables using build arguments
ENV DATABASE_HOST=$MONGODB_URI
ENV DATABASE_PORT=$PORT

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "run", "start"]
