FROM node:8.9.4
MAINTAINER Rui "ruiyangwind@gmail.com"
RUN mkdir -p /opt/game-auth
WORKDIR /opt/game-auth
COPY package.json /opt/game-auth/
COPY package-lock.json /opt/game-auth/
RUN npm install --production
COPY . /opt/game-auth
EXPOSE 3000
CMD [ "npm", "start" ]
