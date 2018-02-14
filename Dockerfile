FROM node:latest
RUN mkdir -p /opt/game-auth
WORKDIR /opt/game-auth
COPY package.json /opt/game-auth/
COPY package-lock.json /opt/game-auth/
RUN npm install
COPY . /opt/game-auth
EXPOSE 3000
CMD [ "npm", "start" ]
