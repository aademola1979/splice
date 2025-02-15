FROM node:22.13.0-alpine

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package*.json ./

RUN npm install

RUN npm list next

COPY . .

CMD ["npm", "run", "dev"]
