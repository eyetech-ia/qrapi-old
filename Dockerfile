FROM node
WORKDIR . /app

RUN apt update && apt-get upgrade -y
RUN npm install -g @adonisjs/cli


COPY package*.json ./

RUN npm install


COPY . .

RUN adonis migration:run
EXPOSE 8080

ENTRYPOINT [ "npm", "run", "dev" ]
