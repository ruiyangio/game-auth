FROM node:8.9.4
LABEL maintainer Rui "ruiyangwind@gmail.com"
ARG node_env=dev
RUN mkdir -p /opt/game-auth
WORKDIR /opt/game-auth
COPY package.json /opt/game-auth/
COPY package-lock.json /opt/game-auth/
RUN npm install --production
COPY . /opt/game-auth
EXPOSE 3000
ENV NODE_ENV=${node_env}
CMD [ "npm", "start" ]
