# Stage 1: Build React Application
FROM node:20 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve React Application
FROM node:20 AS serve

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/build ./build

EXPOSE 80

CMD ["npx", "serve", "-s", "build", "-l", "80"]
