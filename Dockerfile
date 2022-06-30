FROM node:lts-alpine3.16

WORKDIR /app
COPY . .
RUN npm install

ENV PORT 3000

# build NextJs project
RUN npm run build

# run for production
CMD [ "npm", "run", "start"]
