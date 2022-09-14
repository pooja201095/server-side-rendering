FROM node
WORKDIR /app
ADD . /app
RUN npm install
RUN npm run dev:build-client-prod
RUN npm run dev:build-server-prod
EXPOSE 3000
CMD npm run start:prod
