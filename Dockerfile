FROM node:24-slim AS build
WORKDIR /opt/app
ENV NODE_ENV=production
RUN npm install --omit=dev
EXPOSE 1337
CMD ["npm", "start"]
