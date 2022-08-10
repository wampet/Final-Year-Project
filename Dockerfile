FROM timbru31/node-alpine-git

WORKDIR /app
COPY package.json .
RUN npm install 
COPY . .

CMD ["npm", "start"]        