FROM node:lts

WORKDIR /property-broker-frontend

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run dev

EXPOSE 3000

CMD ["npm", "run", "dev"] 

