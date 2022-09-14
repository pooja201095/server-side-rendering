FROM node
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3000
CMD npm run dev:build-client-prod
CMD npm run dev:build-server-prod
CMD npm run start:prod
