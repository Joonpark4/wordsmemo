# 빌드 스테이지
FROM node:20 as builder

WORKDIR /usr/src/app

COPY package*.json ./
# env 파일 복사
COPY .env ./.env

RUN npm install --verbose

COPY . .

RUN npm run build

# 실행 스테이지
FROM node:20

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/.env ./.env

CMD [ "npm", "start" ]

EXPOSE 3000