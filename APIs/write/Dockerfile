FROM node:alpine

# create the directory inside the container
WORKDIR /usr/src/app

# copy the package.json files from local machine to the workdir in container
COPY package*.json ./

# run npm install in our local machine
RUN npm install

# copy the generated modules and all other files to the container
COPY . .

# copy wait-for-it
ADD wait-for-it.sh .

# make it execuatable 
RUN chmod +x wait-for-it.sh
# our app is running on port 5000 within the container, so need to expose it
EXPOSE 6000

# the command that starts our app
# CMD ["node", "index.js"]
CMD ["sh", "wait-for-it.sh", "slave_db:5432", "--", "node", "index.js"]
