FROM node
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3000
CMD npm run dev:build-client1
CMD npm run dev:build-server1
CMD npm run start:prod
