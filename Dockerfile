FROM node:24-slim AS build
COPY . .
ENV NODE_ENV=production
RUN npm install --omit=dev
EXPOSE 1337
CMD ["npm", "run", "strapi", "start"]
