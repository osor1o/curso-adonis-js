FROM node:8

RUN mkdir /api
RUN chown -R node /api
RUN chmod -R 774 /api
WORKDIR /api
RUN yarn global add @adonisjs/cli
EXPOSE 8082
USER node