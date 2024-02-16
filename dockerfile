FROM node:21-alpine
ENV API_KEY=""
RUN mkdir /app_node
COPY . ./app_node
WORKDIR /app_node
RUN npm i
RUN npm i --save-dev @types/swagger-ui-express @types/swagger-jsdoc
RUN npm i ts-node typescript
RUN echo "running"
EXPOSE 3000
CMD npm start
