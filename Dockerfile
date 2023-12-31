FROM node:16-alpine AS development
ENV NODE_ENV development

WORKDIR /app

COPY package.json .

RUN yarn cache clean
RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]
