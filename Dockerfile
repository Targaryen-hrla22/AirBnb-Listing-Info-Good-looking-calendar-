From node:carbon

WORKDIR ./

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3030
CMD ["npm", "start"]