FROM node:24-slim AS build
COPY . /app
WORKDIR /app
ENV NODE_ENV=production
RUN npm install --omit=dev
EXPOSE 1337
CMD ["npm", "run", "strapi", "start"]
