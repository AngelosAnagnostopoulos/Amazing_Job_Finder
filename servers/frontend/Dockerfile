FROM node:16-alpine

RUN mkdir node
WORKDIR /node
COPY . /node

ADD wait-for-it.sh .
RUN chmod +x wait-for-it.sh

RUN npm install 
EXPOSE 3000

CMD ["sh", "wait-for-it.sh", "rdb:6379", "--", "npm", "start"]
