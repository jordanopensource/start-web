FROM node:lts-alpine3.16

COPY package*.json /tmp/
RUN cd /tmp && npm install

WORKDIR /app
COPY . .

RUN mv /tmp/node_modules .

ENV PORT 3000

# build NextJs project
RUN npm run build

# run for production
CMD [ "npm", "run", "start"]
