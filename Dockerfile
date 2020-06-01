FROM node:12

COPY package.json /src/package.json
WORKDIR /src
RUN npm install

COPY calculateDate.js /src
COPY searchWords.js /src
COPY index.js /src

CMD [ "node", "." , "name", "mm/dd", "token", "id discord App" , "0"]