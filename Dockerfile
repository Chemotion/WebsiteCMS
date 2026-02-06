FROM node:24-slim AS build
COPY . /app
WORKDIR /app
ENV NODE_ENV=production
RUN npm install
EXPOSE 1337
RUN npm run strapi build
CMD ["npm", "run", "strapi", "start"]
