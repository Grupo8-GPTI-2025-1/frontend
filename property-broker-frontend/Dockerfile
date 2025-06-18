FROM node:lts

WORKDIR /property-broker-frontend

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"] 

