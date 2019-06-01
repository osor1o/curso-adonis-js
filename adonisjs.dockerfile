FROM node:8

WORKDIR /home
RUN yarn global add @adonisjs/cli
EXPOSE 8082