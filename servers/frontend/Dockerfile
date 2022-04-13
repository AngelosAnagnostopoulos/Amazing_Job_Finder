FROM node:16-alpine

RUN mkdir node
WORKDIR /node
COPY . /node
RUN npm install 
EXPOSE 3000
CMD npm start