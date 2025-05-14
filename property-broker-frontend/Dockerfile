FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY pnpm-lock.yaml ./
COPY package.json ./

RUN pnpm i --frozen-lockfile

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["npm", "run", "start"]