FROM node:11.15.0-alpine
WORKDIR /.
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
EXPOSE ${NUXT_PORT}
ENV CONNECTION_STRING=x
CMD [ "npm", "start" ]
