FROM node:alpine

# create the directory inside the container
WORKDIR /usr/src/app

# copy the package.json files from local machine to the workdir in container
COPY package*.json ./

# run npm install in our local machine
RUN npm install

# copy the generated modules and all other files to the container
COPY . .
ADD wait-for-it.sh .
RUN chmod +x wait-for-it.sh

EXPOSE 5050

# the command that starts our app
CMD ["sh", "wait-for-it.sh", "mdb:27017", "--", "node", "index.js"]
# CMD ls
