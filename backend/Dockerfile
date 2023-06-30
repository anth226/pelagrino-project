FROM node:19

WORKDIR /app/medusa

COPY package.json .
COPY .yarn .
COPY yarn.* .

RUN apt-get update

RUN apt-get install -y python

RUN corepack enable

RUN yarn global add @medusajs/medusa-cli@latest

RUN yarn install

COPY . .

CMD ["yarn", "run", "start:dev"]
