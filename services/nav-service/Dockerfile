FROM node:16.14.0-alpine 

COPY /src /app/src
COPY ./.env /app/dist/.env
COPY ./proto /app/proto
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
COPY ./tsconfig.json /app/tsconfig.json

WORKDIR /app

RUN npm i
RUN npx tsc


WORKDIR /app/dist

CMD ["node", "main.js"]
