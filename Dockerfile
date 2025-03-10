FROM node:18-slim AS build
WORKDIR /opt/app
COPY package*.json ./
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install --omit=dev
COPY . .
RUN npm rebuild better-sqlite3 && npm run build

FROM node:18-slim
WORKDIR /opt/app
COPY --from=build /opt/app ./
EXPOSE 1337
CMD ["npm", "start"]
