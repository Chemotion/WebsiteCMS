# same as that in .tool-versions
FROM node:24.14.1-slim AS build
WORKDIR /opt/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm rebuild better-sqlite3 && npm run strapi build

FROM node:24.14.1-slim
WORKDIR /opt/app
COPY --from=build /opt/app ./
EXPOSE 1337
CMD ["npm", "run", "strapi", "start"]