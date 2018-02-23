FROM node:8.9.4
RUN mkdir -p /opt/game-auth
WORKDIR /opt/game-auth
COPY package.json /opt/game-auth/
COPY package-lock.json /opt/game-auth/
RUN npm install
COPY . /opt/game-auth
WORKDIR /opt/game-auth/dashboard
RUN npm install
RUN npm run build
WORKDIR /opt/game-auth
EXPOSE 3000
CMD [ "npm", "start" ]
